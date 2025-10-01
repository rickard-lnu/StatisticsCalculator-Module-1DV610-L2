const StatisticsCalculator = require('../src/StatisticsCalculator')

const calc = new StatisticsCalculator()
calc.addData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// Basic statistics
console.log('Count:', calc.count())           // 10
console.log('Mean:', calc.mean())             // 5.5
console.log('Median:', calc.median())         // 5.5
console.log('Standard Deviation:', calc.stdDev()) // ~2.87
console.log('Range:', calc.range())           // 9