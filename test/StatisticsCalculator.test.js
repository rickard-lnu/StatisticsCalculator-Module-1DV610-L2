// Tests for my statistics calculator
// Made by Rickard M <rm222ut@student.lnu.se>

const StatisticsCalculator = require('../src/StatisticsCalculator')

describe('StatisticsCalculator', () => {
  let calc

  beforeEach(() => {
    calc = new StatisticsCalculator()
  })

  test('should make new calculator with no numbers', () => {
    expect(calc.count()).toBe(0)
  })

  test('should add numbers to calculator', () => {
    calc.addData([1, 2, 3, 4, 5])
    expect(calc.count()).toBe(5)
  })

  test('should throw error if not array', () => {
    expect(() => calc.addData('not an array')).toThrow('Data has to be an array')
  })

  test('should throw error for bad numbers', () => {
    expect(() => calc.addData([1, 2, 'three', 4])).toThrow('All values can only be valid numbers')
  })

  test('should clear all data', () => {
    calc.addData([1, 2, 3])
    calc.clearData()
    expect(calc.count()).toBe(0)
  })

  test('should add up all numbers', () => {
    calc.addData([1, 2, 3, 4, 5])
    expect(calc.sum()).toBe(15)
  })

  test('should calculate average', () => {
    calc.addData([1, 2, 3, 4, 5])
    expect(calc.mean()).toBe(3)
  })

  test('should find smallest number', () => {
    calc.addData([5, 2, 8, 1, 9])
    expect(calc.min()).toBe(1)
  })

  test('should find biggest number', () => {
    calc.addData([5, 2, 8, 1, 9])
    expect(calc.max()).toBe(9)
  })

  test('should sort numbers correctly', () => {
    calc.addData([5, 2, 8, 1, 9])
    expect(calc.sortData()).toEqual([1, 2, 5, 8, 9])
  })

  test('should find middle number (odd)', () => {
    calc.addData([1, 2, 3, 4, 5])
    expect(calc.median()).toBe(3)
  })

  test('should find middle number (even)', () => {
    calc.addData([1, 2, 3, 4])
    expect(calc.median()).toBe(2.5)
  })

  test('should calculate variance', () => {
    calc.addData([1, 2, 3, 4, 5])
    expect(calc.variance()).toBe(2)
  })

  test('should calculate standard deviation', () => {
    calc.addData([1, 2, 3, 4, 5])
    expect(calc.stdDev()).toBeCloseTo(Math.sqrt(2), 5)
  })

  test('should calculate range', () => {
    calc.addData([1, 5, 3, 9, 2])
    expect(calc.range()).toBe(8)
  })

  test('should find mode (single)', () => {
    calc.addData([1, 2, 2, 3, 4])
    expect(calc.mode()).toEqual([2])
  })

  test('should find mode (multiple)', () => {
    calc.addData([1, 1, 2, 2, 3])
    expect(calc.mode()).toEqual([1, 2])
  })

  test('should find percentiles', () => {
    calc.addData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(calc.percentile(50)).toBe(5.5) // median
    expect(calc.q1()).toBe(3.25) // 25th percentile
    expect(calc.q3()).toBe(7.75) // 75th percentile
  })

  test('should calculate IQR', () => {
    calc.addData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(calc.iqr()).toBe(4.5)
  })

  test('should multiply all numbers together', () => {
    calc.addData([2, 3, 4])
    expect(calc.product()).toBe(24)
  })

  test('should calculate sum of squares', () => {
    calc.addData([1, 2, 3])
    expect(calc.sumOfSquares()).toBe(14) // 1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14
  })

  test('should calculate mean of absolute values', () => {
    calc.addData([-2, -1, 0, 1, 2])
    expect(calc.meanAbsolute()).toBe(1.2) // (2 + 1 + 0 + 1 + 2) / 5 = 6/5 = 1.2
  })

  test('should calculate happiness index (fun weird function)', () => {
    calc.addData([0, 10, 4, -5])
    // 0 gets 5 points, 10 gets 4 points (1 base + 2 round + 1 small), 
    // 4 gets 5 points (1 base + 1 small + 3 perfect square), 
    // -5 gets 0 points (1 base - 1 negative)
    // Total: 14 points / 4 numbers = 3.5
    expect(calc.happinessIndex()).toBe(3.5)
  })

  // test empty data
  test('should return null for empty data', () => {
    expect(calc.mean()).toBe(null)
    expect(calc.min()).toBe(null)
    expect(calc.max()).toBe(null)
    expect(calc.median()).toBe(null)
    expect(calc.variance()).toBe(null)
    expect(calc.stdDev()).toBe(null)
    expect(calc.range()).toBe(null)
    expect(calc.mode()).toBe(null)
    expect(calc.percentile(50)).toBe(null)
    expect(calc.iqr()).toBe(null)
    expect(calc.product()).toBe(null)
    expect(calc.sumOfSquares()).toBe(null)
    expect(calc.meanAbsolute()).toBe(null)
    expect(calc.happinessIndex()).toBe(null)
  })

  test('should return 0 for empty sum', () => {
    expect(calc.sum()).toBe(0)
  })

  test('should throw error for bad percentile', () => {
    calc.addData([1, 2, 3])
    expect(() => calc.percentile(-1)).toThrow('Percentile has to be between 0 and 100')
    expect(() => calc.percentile(101)).toThrow('Percentile has to be between 0 and 100')
  })
})