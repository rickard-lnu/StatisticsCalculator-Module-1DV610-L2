class StatisticsCalculator {
  constructor() {
    this.numbers = []  // store the numbers here
  }

  // Add numbers to calculate with
  addData(values) {
    if (!Array.isArray(values)) {
      throw new Error('Data has to be an array')
    }
    
    // check each number is valid
    for (let i = 0; i < values.length; i++) {
      if (typeof values[i] !== 'number' || isNaN(values[i])) {
        throw new Error('All values must be valid numbers')
      }
    }
    
    // add all numbers to our array
    for (let i = 0; i < values.length; i++) {
      this.numbers.push(values[i])
    }
  }

  // clear all data
  clearData() {
    this.numbers = []
  }

  // how many numbers do we have
  count() {
    return this.numbers.length
  }

  // add all numbers together
  sum() {
    if (this.numbers.length === 0) {
      return 0
    }
    
    let total = 0
    for (let i = 0; i < this.numbers.length; i++) {
      total = total + this.numbers[i]
    }
    return total
  }

  // calculate average
  mean() {
    if (this.numbers.length === 0) {
      return null
    }
    
    let sum = this.sum()
    let average = sum / this.numbers.length
    return average
  }

  // find smallest number
  min() {
    if (this.numbers.length === 0) {
      return null
    }
    
    let smallest = this.numbers[0]
    for (let i = 1; i < this.numbers.length; i++) {
      if (this.numbers[i] < smallest) {
        smallest = this.numbers[i]
      }
    }
    return smallest
  }

  // find biggest number
  max() {
    if (this.numbers.length === 0) {
      return null
    }
    
    let biggest = this.numbers[0]
    for (let i = 1; i < this.numbers.length; i++) {
      if (this.numbers[i] > biggest) {
        biggest = this.numbers[i]
      }
    }
    return biggest
  }

  // find the middle number
  median() {
    if (this.numbers.length === 0) {
      return null
    }
    
    let sorted = this.sortData()
    let middle = Math.floor(sorted.length / 2)
    
    // if even number of items, take average of two middle ones
    if (sorted.length % 2 === 0) {
      let result = (sorted[middle - 1] + sorted[middle]) / 2
      return result
    } else {
      // odd number, just take the middle one
      return sorted[middle]
    }
  }

  // calculate variance (spread of data)
  variance() {
    if (this.numbers.length === 0) {
      return null
    }
    
    let avg = this.mean()
    let sumSquaredDiffs = 0
    
    // calculate squared differences from mean
    for (let i = 0; i < this.numbers.length; i++) {
      let diff = this.numbers[i] - avg
      sumSquaredDiffs = sumSquaredDiffs + (diff * diff)
    }
    
    let variance = sumSquaredDiffs / this.numbers.length
    return variance
  }

  // standard deviation (square root of variance)
  stdDev() {
    let var_result = this.variance()
    if (var_result === null) {
      return null
    }
    return Math.sqrt(var_result)
  }

  // difference between max and min
  range() {
    if (this.numbers.length === 0) {
      return null
    }
    return this.max() - this.min()
  }

  // find the most common number(s)
  mode() {
    if (this.numbers.length === 0) {
      return null
    }
    
    // count how many times each number appears
    let counts = {}
    for (let i = 0; i < this.numbers.length; i++) {
      let num = this.numbers[i]
      if (counts[num]) {
        counts[num] = counts[num] + 1
      } else {
        counts[num] = 1
      }
    }
    
    // find the highest count
    let maxCount = 0
    for (let num in counts) {
      if (counts[num] > maxCount) {
        maxCount = counts[num]
      }
    }
    
    // get all numbers that have the max count
    let modes = []
    for (let num in counts) {
      if (counts[num] === maxCount) {
        modes.push(Number(num))
      }
    }
    
    // if all numbers appear same amount, no real mode
    if (modes.length === this.numbers.length) {
      return null
    }
    return modes
  }

  // find value at certain percentage point
  percentile(percent) {
    if (this.numbers.length === 0) {
      return null
    }
    
    if (percent < 0 || percent > 100) {
      throw new Error('Percentile has to be between 0 and 100')
    }
    
    let sorted = this.sortData()
    let index = (percent / 100) * (sorted.length - 1)
    
    // if exact index, return that value
    if (index === Math.floor(index)) {
      return sorted[index]
    }
    
    // otherwise interpolate between two values
    let lower = Math.floor(index)
    let upper = Math.ceil(index)
    let weight = index - lower
    return sorted[lower] + weight * (sorted[upper] - sorted[lower])
  }

  // some extra functions that might be useful
  
  // first quartile (25th percentile)
  q1() {
    return this.percentile(25)
  }

  // third quartile (75th percentile)  
  q3() {
    return this.percentile(75)
  }

  // interquartile range
  iqr() {
    if (this.numbers.length === 0) {
      return null
    }
    return this.q3() - this.q1()
  }

  // multiply all numbers together
  product() {
    if (this.numbers.length === 0) {
      return null
    }
    
    let result = 1
    for (let i = 0; i < this.numbers.length; i++) {
      result = result * this.numbers[i]
    }
    return result
  }

  // add up all numbers squared (learned this for variance calculation)
  sumOfSquares() {
    if (this.numbers.length === 0) {
      return null
    }
    
    let total = 0
    for (let i = 0; i < this.numbers.length; i++) {
      let squared = this.numbers[i] * this.numbers[i]
      total = total + squared
    }
    return total
  }
  
  // average of absolute values (always positive)
  meanAbsolute() {
    if (this.numbers.length === 0) {
      return null
    }
    
    let sum = 0
    for (let i = 0; i < this.numbers.length; i++) {
      // Math.abs makes negative numbers positive
      let absoluteValue = Math.abs(this.numbers[i])
      sum = sum + absoluteValue
    }
    
    let average = sum / this.numbers.length
    return average
  }
}