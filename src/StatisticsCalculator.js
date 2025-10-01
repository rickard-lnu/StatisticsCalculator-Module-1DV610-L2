/**
 * A statistics calculator for numbers
 * Made by Rickard M <rm222ut@student.lnu.se>
 * with help from code tabbing
 */
class StatisticsCalculator {
  /**
   * Creates a new StatisticsCalculator instance
   */
  constructor() {
    this.numbers = []  // store the numbers here
  }

  /**
   * Add numbers to calculate with
   * @param {number[]} values - Array of numbers to add to the dataset
   * @throws {Error} When values is not an array or contains invalid numbers
   */
  addData(values) {
    if (!Array.isArray(values)) {
      throw new Error('Data has to be an array')
    }
    
    // check each number is valid
    for (let i = 0; i < values.length; i++) {
      if (typeof values[i] !== 'number' || isNaN(values[i])) {
        throw new Error('All values can only be valid numbers')
      }
    }
    
    // add all numbers to our array
    for (let i = 0; i < values.length; i++) {
      this.numbers.push(values[i])
    }
  }

  /**
   * Clear all data from the calculator
   */
  clearData() {
    this.numbers = []
  }

  /**
   * Get the count of numbers in the dataset
   * @returns {number} Number of values in the dataset
   */
  count() {
    return this.numbers.length
  }

  /**
   * Calculate the sum of all numbers
   * @returns {number} Sum of all values, or 0 if empty
   */
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

  /**
   * Calculate the arithmetic mean (average) of all numbers
   * @returns {number|null} The mean value, or null if no data
   */
  mean() {
    if (this.numbers.length === 0) {
      return null
    }
    
    let sum = this.sum()
    let average = sum / this.numbers.length
    return average
  }

  /**
   * Find the minimum value in the dataset
   * @returns {number|null} Smallest value, or null if no data
   */
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

  /**
   * Find the maximum value in the dataset
   * @returns {number|null} Largest value, or null if no data
   */
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

  /**
   * Sort the numbers without modifying the original dataset
   * @returns {number[]} Sorted copy of the data in ascending order
   */
  sortData() {
    if (this.numbers.length === 0) {
      return []
    }
    
    // make a copy so we don't mess up original
    let sortedNumbers = []
    for (let i = 0; i < this.numbers.length; i++) {
      sortedNumbers.push(this.numbers[i])
    }
    
    // simple bubble sort (i learned this in class)
    for (let i = 0; i < sortedNumbers.length; i++) {
      for (let j = 0; j < sortedNumbers.length - 1; j++) {
        if (sortedNumbers[j] > sortedNumbers[j + 1]) {
          // swap them
          let temp = sortedNumbers[j]
          sortedNumbers[j] = sortedNumbers[j + 1]
          sortedNumbers[j + 1] = temp
        }
      }
    }
    
    return sortedNumbers
  }

  /**
   * Calculate the median (middle value) of the dataset
   * @returns {number|null} Median value, or null if no data
   */
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

  /**
   * Calculate the variance (measure of spread) of the dataset
   * @returns {number|null} Variance value, or null if no data
   */
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

  /**
   * Calculate the standard deviation (square root of variance)
   * @returns {number|null} Standard deviation, or null if no data
   */
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

  /**
   * Find the mode(s) - most frequently occurring value(s)
   * @returns {number[]|null} Array of mode values, or null if no data or no clear mode
   */
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

  /**
   * Calculate a specific percentile of the dataset
   * @param {number} percent - Percentile to calculate (0-100)
   * @returns {number|null} Percentile value, or null if no data
   * @throws {Error} When percent is not between 0 and 100
   */
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

  /**
   * Calculate the interquartile range (Q3 - Q1)
   * @returns {number|null} IQR value, or null if no data
   */
  iqr() {
    if (this.numbers.length === 0) {
      return null
    }
    return this.q3() - this.q1()
  }

  /**
   * Calculate the product of all numbers in the dataset
   * @returns {number|null} Product of all values, or null if no data
   */
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

  /**
   * Calculate the sum of squares of all numbers
   * @returns {number|null} Sum of squared values, or null if no data
   */
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

  /**
   * Calculate the mean of absolute values
   * @returns {number|null} Mean of absolute values, or null if no data
   */
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

  /**
   * Calculate a custom "happiness index" that rates numbers based on various criteria
   * This is a fun experimental function that gives bonus points for
   * - Round numbers (divisible by 10)
   * - Small positive numbers (1-10)
   * - Perfect squares
   * - Zero gets neutral score, and negatives lose points
   * @returns {number|null} Average happiness score per number, or null if theres no data
   */
  happinessIndex() {
    if (this.numbers.length === 0) {
      return null
    }
    
    let totalHappiness = 0
    for (let i = 0; i < this.numbers.length; i++) {
      let num = this.numbers[i]
      let happiness = 1  // base happiness for existing
      
      // round numbers are happy
      if (num % 10 === 0) {
        happiness = happiness + 2
      }
      
      // small positive numbers are nice
      if (num >= 1 && num <= 10) {
        happiness = happiness + 1
      }
      
      // perfect squares get bonus (like 4, 9, 16, 25)
      let sqrt = Math.sqrt(Math.abs(num))
      if (sqrt === Math.floor(sqrt)) {
        happiness = happiness + 3
      }
      
      // zero is perfectly neutral
      if (num === 0) {
        happiness = 5
      }
      
      // negative numbers are sad
      if (num < 0) {
        happiness = happiness - 1
      }
      
      totalHappiness = totalHappiness + happiness
    }
    
    // return average happiness per number
    let avgHappiness = totalHappiness / this.numbers.length
    return avgHappiness
  }
}

module.exports = StatisticsCalculator