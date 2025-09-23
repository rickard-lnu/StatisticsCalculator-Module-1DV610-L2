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

}