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
}