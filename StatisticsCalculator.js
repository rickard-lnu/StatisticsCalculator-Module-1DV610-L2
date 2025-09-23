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
}