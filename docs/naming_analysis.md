# Naming Analysis - Clean Code chapter 2

**Module:** StatisticsCalculator  
**Reference:** Clean Code Chapter 2 Meaningful Names  

## Public interface naming analysis

| Name | Explanation | Reflection and Clean Code Rules |
|------|-------------|--------------------------------|
| `StatisticsCalculator` | Class name for the main module class | **Use Noun Phrases**: Class names should be nouns. "StatisticsCalculator" clearly indicates what the class does - it calculates statistics. **Be Descriptive**: The name tells you this class handles statistical calculations. **Avoid Mental Mapping**: No abbreviation like "StatCalc" - the full name is clear and unambiguous. |
| `addData(values)` | Method name for adding numerical data to the dataset | **Use Verb Phrases**: Method names should be verbs. "add" clearly indicates the action being performed. **Make Meaningful Distinctions**: Could have been "add()" but "addData" is more specific about what's being added. **Use Searchable Names**: "addData" is much more easy to find than a simple "add" method. |
| `meanAbsolute()` | Method name that calculates the mean of absolute values | **Avoid Mental Mapping**: The name quite clearly states it calculates the mean of absolute values, no mental translation is needed here. **Use Problem Domain Names**: "mean" and "absolute" are standard mathematical terms that the target audience (people doing statistics) will be able to understand. **Make Meaningful Distinctions**: Clearly different from just "mean()" - the "Absolute" part adds meaning. |
| `happinessIndex()` | Method name for a (odd but fun) scoring function that rates number "quality" | **Don't Be Cute**: This violates the "don't be cute" rule - "happiness" is a "goofy" name that doesn't clearly say what the method does mathematically. A better name could be something like "qualityScore()" or "numberRatingIndex()". But, I kept it as "happinessIndex" because it's documented as a fun, experimental function. **Avoid Disinformation**: The name might mislead users about what the function actually calculates. |
| `percentile(percent)` | Method name and parameter for calculating percentile values | **Use Intention-Revealing Names**: Both the method name and parameter clearly indicate what this does - it calculates a percentile based on the given percentage. **Avoid Encodings**: No Hungarian notation or prefixes - just clear, direct naming. **Use Pronounceable Names**: Both "percentile" and "percent" are often used English words that are easy to say and understand. |

## Reflection on Clean Code chapter 2

### What i applied well

I believe my naming overall follows Clean Code principles:

- **Use Intention-Revealing Names**: Most method names like `mean()`, `median()`, `variance()`, and `stdDev()` indicate their mathematical purpose.
- **Use Problem Domain Names**: I used standard statistical terminology that the target audience would understand (`variance`, `median`, `quartile`).
- **Make Meaningful Distinctions**: Methods like `mean()` vs `meanAbsolute()` and `sum()` vs `sumOfSquares()` have obvious, and meaningful differences.

### Areas for improvement

After reading Chapter 2, I identified a few naming issues in my code:

1. **Don't Be Cute Violation**: The `happinessIndex()` method name is "cute" but not descriptive. A professional statistics library shouldn't have "goofy" names. I should probably rename it to `qualityScore()`, or `customRatingIndex()`, or something along those lines.

2. **Avoid Abbreviations**: While `stdDev()` is a common abbreviation in statistics, Clean Code suggests avoiding abbreviations. `standardDeviation()` would be clearer for people who aren't experts.

3. **Inconsistent Naming Patterns**: I have both `q1()` and `q3()` (abbreviated) alongside `iqr()` (acronym) and full names like `percentile()`. Maybe a consistent pattern would be better - either `firstQuartile()` and `thirdQuartile()` or keep the mathematical conventions.

### Personal reflection

The most challenging aspect of Clean Code's naming rules i think is balancing domain-specific conventions with general readability. In statistics, abbreviations like "std dev" and "IQR" are so standard that full names might actually be less clear to the target audience. For a module that might be used by beginners (which more aligns with my "beginner-written" coding style), more explicit names would probably be better, though.

I disagree slightly with the "no abbreviations" rule when it comes to well-established or common domain terminology. In mathematics and statistics, certain abbreviations are more recognizable than their full forms. But I'm aware that this can create a barrier for newcomers to the field.

### Planned Improvements

If I were to refactor based on Clean Code principles:

1. Rename `happinessIndex()` to `qualityRatingIndex()`
2. Maybe use `standardDeviation()` instead of `stdDev()` for clarity
3. Standardize quartile naming: either `firstQuartile()`/`thirdQuartile()`
4. Make parameter names more descriptive where it's needed

The main insight from Chapter 2 is that naming should serve the reader, not the writer. Even if I understand what `happinessIndex()` does, future users (which includes myself) will likely benefit from more intention revealing names.
