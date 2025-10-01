# Test Report - StatisticsCalculator

**Module:** StatisticsCalculator  
**Test Date:** 2025-10-01  
**Tester:** Rickard M  
**Test Method:** Automated unit tests with Jest  
**Test Framework:** Jest 30.1.3  

## Testing summary

The module has been tested through automated unit tests using the Jest test framework. A total of 26 test cases have been created that cover all public methods in the StatisticsCalculator class. The tests verify both normal functionality and edge cases such as empty datasets, invalid input, and boundary values.

**Test Results:** ✅ All 26 tests passed  
**Test Coverage:** 100% of all public methods   

## How to run the tests

To replicate the tests:

1. **Prerequisites:**
   - Node.js installed (version 20.x.x or later)
   - Jest installed as dev dependency

2. **Run the tests:**
   ```bash
   cd stat-calc
   npm install
   npm test
   ```

3. **Test files:**
   - `StatisticsCalculator.test.js` - Main test file with all test cases
   - `StatisticsCalculator.js` - The module being tested

## Detailed test results

| What was tested | How it was tested | Test Result |
|----------------|-----------------|--------------|
| **Constructor and data management** | | |
| Constructor initialization | Create new instance and verify that count() returns 0 | ✅ PASS |
| addData() with valid values | Add array [1,2,3,4,5] and verify count() = 5 | ✅ PASS |
| addData() error handling - not array | Try sending string instead of array, expect error | ✅ PASS |
| addData() error handling - invalid values | Send array with string value, expect error | ✅ PASS |
| clearData() functionality | Add data, clear, verify count() = 0 | ✅ PASS |
| **Basic statistics** | | |
| sum() with data | Dataset [1,2,3,4,5], expect sum = 15 | ✅ PASS |
| sum() without data | Empty dataset, expect sum = 0 | ✅ PASS |
| mean() with data | Dataset [1,2,3,4,5], expect average = 3 | ✅ PASS |
| min() functionality | Dataset [5,2,8,1,9], expect minimum = 1 | ✅ PASS |
| max() functionality | Dataset [5,2,8,1,9], expect maximum = 9 | ✅ PASS |
| range() calculation | Dataset [1,5,3,9,2], expect range = 8 | ✅ PASS |
| **Sorting and median** | | |
| sortData() algorithm | Dataset [5,2,8,1,9], expect sorted = [1,2,5,8,9] | ✅ PASS |
| median() odd count | Dataset [1,2,3,4,5], expect median = 3 | ✅ PASS |
| median() even count | Dataset [1,2,3,4], expect median = 2.5 | ✅ PASS |
| **Variation and spread** | | |
| variance() calculation | Dataset [1,2,3,4,5], expect variance = 2 | ✅ PASS |
| stdDev() calculation | Dataset [1,2,3,4,5], expect stdDev ≈ sqrt(2) | ✅ PASS |
| **Mode (most frequent value)** | | |
| mode() single value | Dataset [1,2,2,3,4], expect mode = [2] | ✅ PASS |
| mode() multiple values | Dataset [1,1,2,2,3], expect mode = [1,2] | ✅ PASS |
| **Percentiles and quartiles** | | |
| percentile() calculation | Dataset [1-10], test 50th percentile = 5.5 | ✅ PASS |
| q1() calculation | Dataset [1-10], expect Q1 = 3.25 | ✅ PASS |
| q3() calculation | Dataset [1-10], expect Q3 = 7.75 | ✅ PASS |
| iqr() calculation | Dataset [1-10], expect IQR = 4.5 | ✅ PASS |
| percentile() error handling | Test percentile(-1) and percentile(101), expect error | ✅ PASS |
| **Mathematical operations** | | |
| product() calculation | Dataset [2,3,4], expect product = 24 | ✅ PASS |
| sumOfSquares() calculation | Dataset [1,2,3], expect sum of squares = 14 | ✅ PASS |
| meanAbsolute() calculation | Dataset [-2,-1,0,1,2], expect absolute mean = 1.2 | ✅ PASS |
| **Special functions** | | |
| happinessIndex() algorithm | Dataset [0,10,4,-5], expect happiness index = 3.5 | ✅ PASS |
| **Edge cases - empty data** | | |
| All methods with empty data | Verify that all methods return null (except sum) | ✅ PASS |

## Test specifications per method

### Constructor and data management
- **addData()**: Tests both valid arrays and error handling for invalid inputs
- **clearData()**: Verifies that all data is removed correctly
- **count()**: Checks that element counting works

### Mathematical calculations
- **sum()**: Special test for empty data returning 0 (not null)
- **mean()**: Standard arithmetic mean
- **variance()**: Population variance (divided by n)
- **stdDev()**: Standard deviation as square root of variance

### Sorting
- **sortData()**: Bubble sort algorithm that doesn't modify original data
- **median()**: Handles both odd and even number of elements

### Statistical measures
- **percentile()**: Linear interpolation for non-exact indices
- **mode()**: Finds all values with highest frequency
- **happinessIndex()**: Scoring based on mathematical properties

## Test environment
- **Operating System:** Windows
- **Node.js version:** Run on v20.16.0
- **Jest version:** 30.1.3

## Summary

All 26 automated unit tests pass successfully. The module shows functionality with correct error handling and edge case handling.