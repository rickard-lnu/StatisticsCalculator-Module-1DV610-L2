# Functions Analysis - Clean Code Chapter 3

**Module:** StatisticsCalculator  
**Reference:** Clean Code Chapter 3 Functions  

## Analysis of the Five Longest Methods

| Method Name | Code (start lines) | Number of lines (excl ws) | Reflection |
|-------------|-------------------|---------------------------|------------|
| `happinessIndex()` | Lines 308-349 | 32 | **Do One Thing**: Violates the rule because method does multiple things: it calculates different bonus points, handles special cases (zero, negative numbers), and calculates average. **Small**: Method is too long and should be split up. **Functions should descend only one level of abstraction**: It mixes low level (loops, if-statements) with high level (calculate happiness index). Better option: Split into smaller methods like `calculateHappinessForNumber()` and `getAverageHappiness()`. |
| `mode()` | Lines 178-214 | 28 | **Do One Thing**: Violates the rule as method counts occurrences, finds max, collects modes AND checks special cases. **Extract Till You Drop**: Could be split into `countOccurrences()`, `findMaxCount()`, and `extractModes()`. **Function Names**: Name is good and says what it does. **Temporal Coupling**: Steps must be performed in correct order which makes code fragile. |
| `percentile(percent)` | Lines 218-239 | 18 | **Function Arguments**: Monadic function which is good. **Have No Side Effects**: This is fine, it doesn't change any state. **Do One Thing**: Almost good but does both validation AND calculation. **Error Handling**: Mixes error handling with business logic. Better option: Move validation out to a separate method `validatePercentile()`. |
| `sortData()` | Lines 96-119 | 18 | **Do One Thing**: Violates the rule because it copies array AND sorts. **Small**: Acceptable length but could be shorter. **Functions should descend only one level of abstraction**: Mixes array copying with sorting logic. Extract `copyArray()` and `bubbleSort()` as separate methods is better. **Command Query Separation**: This is all good, as it returns sorted copy without changing original. |
| `addData(values)` | Lines 12-28 | 15 | **Do One Thing**: This violates the rule because it validates input AND adds data. **Error Handling**: Mixes validation with business logic. **Function Arguments**: Monadic which is good. **Have No Side Effects**: Changes object state which is expected for a "command". Spliting it into `validateInputData()` and `appendToNumbers()` could be better. |

## Reflection on Clean Code chapter 3

### What i did well

Many of my functions follow Clean Code principles:

- **Function Names**: Most method names like `mean()`, `median()`, `sum()` are short and easy to understand
- **Function Arguments**: Many methods are niladic or monadic which is what we want
- **Command Query Separation**: Methods like `sortData()` return copies without changing the original data
- **Use Descriptive Names**: Variable names like `totalHappiness`, `sumSquaredDiffs` are descriptive

### What flaws i discovered after reading Chapter 3

1. **Do One Thing - Biggest Problem**: Basically almost all my longer methods violate the "Do One Thing" rule. Most mix validation, calculation, and formatting in the same method.

2. **Abstraction Levels**: My methods mix different abstraction levels. For example `happinessIndex()` has both low-level loops and high-abstract concept of "happiness index".

3. **Extract Till You Drop**: I dont think i have split my methods enough. Especially `mode()` and `happinessIndex()` would probably benefit from being split into smaller, and more focused methods.

4. **Error Handling vs Business Logic**: Methods like `addData()` and `percentile()` mixes error handling with business logic, which is making them harder to understand and test.

### Personal reflection

The most challenging aspect of chapter 3 is balancing "Do One Thing" with practical coding. As a beginner, it kind of felt natural to have everything in one method to "see the whole picture". But now i realize that small, focused methods, are actually not that much more difficult, and are maybe even easier to understand and debug.

I don't fully agree that functions should be extremely short (2-4 lines) as Robert Martin suggests. I feel like sometimes code becomes too fragmented if you split up too much. But I definitely agree with the "Do One Thing" principle.

### Planned Improvements

If I were to refactor based on chapter 3:

1. **Split `happinessIndex()`** into:
   - `calculateHappinessForNumber(num)`
   - `getAverageHappiness(happinessValues)`

2. **Split `mode()`** into:
   - `countOccurrences(numbers)`
   - `findMaxCount(counts)`
   - `extractModesWithMaxCount(counts, maxCount)`

3. **Extract validation** from `addData()` and `percentile()` into separate methods

4. **Consistent error handling**: Make a separate class or methods for input validation

I think the most important insight from chapter 3 is that functions should be kind of like like small tools, where each one is perfect for its own specific task. That way, code is more testable, readable, and maintainable, even if this means more methods in total.