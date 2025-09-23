# StatisticsCalculator

A JavaScript statistics calculator module with no external dependencies. This module provides essential statistical functions for descriptive statistics and basic mathematical analysis.

## Features

### Data Management
- **Data Operations**: Add data (`addData`), clear data (`clearData`), count values (`count`)
- **Data Utility**: Sort data (`sortData`) without modifying original array

### Basic Statistics
- **Central Tendency**: Mean (`mean`), median (`median`), mode (`mode`)
- **Variability**: Range (`range`), variance (`variance`), standard deviation (`stdDev`)
- **Extremes**: Minimum (`min`), maximum (`max`)
- **Summation**: Sum (`sum`), sum of squares (`sumOfSquares`)

### Percentiles and Quartiles
- **Percentiles**: Any percentile (`percentile`)
- **Quartiles**: First quartile (`q1`), third quartile (`q3`)
- **Range Measures**: Interquartile range (`iqr`)

### Additional Functions
- **Mathematical Operations**: Product of all values (`product`)
- **Absolute Values**: Mean of absolute values (`meanAbsolute`)
- **Fun Functions**: Happiness index (`happinessIndex`) - a creative scoring system for number "quality"

## Usage Examples

### Basic Usage
```javascript
const StatisticsCalculator = require('./StatisticsCalculator')

const calc = new StatisticsCalculator()
calc.addData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// Basic statistics
console.log('Count:', calc.count())           // 10
console.log('Mean:', calc.mean())             // 5.5
console.log('Median:', calc.median())         // 5.5
console.log('Standard Deviation:', calc.stdDev()) // ~2.87
console.log('Range:', calc.range())           // 9
console.log('Sum:', calc.sum())               // 55
```

### Percentiles and Quartiles
```javascript
// Percentiles
console.log('25th Percentile:', calc.percentile(25)) // Q1: 3.25
console.log('75th Percentile:', calc.percentile(75)) // Q3: 7.75
console.log('IQR:', calc.iqr())                      // 4.5

// Direct quartile access
console.log('Q1:', calc.q1())                        // 3.25
console.log('Q3:', calc.q3())                        // 7.75
```

### Mathematical Functions
```javascript
calc.clearData()
calc.addData([1, 2, 3, 4, 5])

console.log('Sum of Squares:', calc.sumOfSquares())  // 55 (1² + 2² + 3² + 4² + 5²)
console.log('Product:', calc.product())              // 120 (1 × 2 × 3 × 4 × 5)
console.log('Mean Absolute:', calc.meanAbsolute())   // 3 (mean of |1|, |2|, |3|, |4|, |5|)
```

### Working with Negative Numbers
```javascript
calc.clearData()
calc.addData([-5, -2, 0, 3, 8])

console.log('Mean:', calc.mean())                    // 0.8
console.log('Mean Absolute:', calc.meanAbsolute())   // 3.6 (mean of 5, 2, 0, 3, 8)
console.log('Min/Max:', calc.min(), calc.max())      // -5, 8
```

### Fun Features
```javascript
calc.clearData()
calc.addData([0, 10, 4, -5, 25])

// Happiness Index - rates numbers based on "nice" properties
console.log('Happiness Index:', calc.happinessIndex())
// Scores numbers based on:
// - Round numbers (10, 20, etc.) get bonus points
// - Perfect squares (4, 9, 16, 25) get bonus points  
// - Small positive numbers (1-10) get bonus points
// - Zero is perfectly neutral
// - Negative numbers lose points
```

## Error Handling

The calculator includes error handling:

```javascript
// Input validation
calc.addData([1, 2, 'invalid', 4])  // Throws: "All values must be valid numbers"
calc.addData('not an array')         // Throws: "Data has to be an array"
calc.addData([1, 2, NaN, 4])        // Throws: "All values must be valid numbers"

// Parameter validation
calc.percentile(-1)     // Throws: "Percentile has to be between 0 and 100"
calc.percentile(101)    // Throws: "Percentile has to be between 0 and 100"

// Edge cases return null appropriately
calc.clearData()
console.log(calc.mean())           // null (no data)
console.log(calc.min())            // null (no data)
console.log(calc.max())            // null (no data)

// Sum returns 0 for empty data (special case)
console.log(calc.sum())            // 0 (empty data)
```

## Method Reference

### Data Management
- `addData(values)` - Add array of numbers to dataset
- `clearData()` - Remove all data from dataset  
- `count()` - Get number of values in dataset
- `sortData()` - Return sorted copy of data (doesn't modify original)

### Basic Statistics
- `sum()` - Sum of all values (returns 0 for empty data)
- `mean()` - Arithmetic mean (average)
- `median()` - Middle value when sorted
- `mode()` - Most frequent value(s), returns array or null
- `min()` - Smallest value
- `max()` - Largest value
- `range()` - Difference between max and min

### Variance and Standard Deviation
- `variance()` - Population variance (÷n)
- `stdDev()` - Population standard deviation (√variance)

### Percentiles and Quartiles
- `percentile(p)` - Value at pth percentile (0-100)
- `q1()` - First quartile (25th percentile)
- `q3()` - Third quartile (75th percentile)
- `iqr()` - Interquartile range (Q3 - Q1)

### Additional Mathematical Functions
- `product()` - Product of all values (multiplication)
- `sumOfSquares()` - Sum of squared values (Σx²)
- `meanAbsolute()` - Mean of absolute values |x|

### Special Functions
- `happinessIndex()` - Creative scoring system rating number "quality" based on mathematical properties

## Testing

The module includes tests covering all functionality:

```bash
npm install --save-dev jest
npx jest StatisticsCalculator.test.js
```

The test suite includes:
- ✅ Data management and validation tests
- ✅ Complete coverage of all statistical methods
- ✅ Edge cases and error conditions
- ✅ Input validation testing
- ✅ Precision handling for floating-point calculations
- ✅ Special function testing (including happiness index)

## Installation

### Option 1: Direct Copy
Copy the `StatisticsCalculator.js` file to your project and import:

```javascript
const StatisticsCalculator = require('./StatisticsCalculator')
```

### Option 2: As Module
If using as a module, check proper file structure:
```
your-project/
├── StatisticsCalculator.js
├── StatisticsCalculator.test.js (optional)
└── your-app.js
```

## Requirements
- Node.js (any modern version)
- No external dependencies
- ES5+ JavaScript support

## License
MIT

## Contributing
Feel free to submit issues and pull requests. Please make sure all tests pass before submitting.

---

*This calculator provides essential statistical analysis functionality meant for my own educational project, please keep this in mind.*
