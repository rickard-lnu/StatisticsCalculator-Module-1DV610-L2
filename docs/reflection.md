# Code Quality Reflection - Clean Code Analysis

**Module:** StatisticsCalculator   
**Author:** Rickard M  
**Course and assignment:** 1DV610 L2  

## Overall code quality assessment

After analysing my StatisticsCalculator module through the principles of Clean Code chapter 2 and 3, I have gained more insights into the quality of my code and places for where i can make improvements. This reflection ties all my findings from both naming analysis and function structure evaluation together.

## Key insights from Clean Code analysis

### Naming Conventions (Chapter 2)
My analysis revealed a mixed picture when it came to naming quality. While I did apply many Clean Code principles—such as using **intention-revealing names** for most methods like `mean()`, `median()`, and `variance()` I also discovered bigger violations. The most glaring example is `happinessIndex()`, which clearly violates the **"Don't Be Cute"** rule. This sort of goofy name fails to communicate the method's actual functionality and i think would confuse users expecting a more professional statistics library.

I found that my inconsistency in naming patterns reflects a beginners approach to coding. While some methods use full descriptive names like `meanAbsolute()`, others rely on abbreviations like `stdDev()` and `q1()`. This inconsistency violates the principle of **meaningful distinctions** and i think makes the API harder to learn and remember.

### Function Design (Chapter 3)
The function analysis exposed more serious code quality issues. My longest methods, particularly `happinessIndex()` (32 lines) and `mode()` (28 lines), very much violate the **"Do One Thing"** principle. These methods try to handle multiple responsibilities: validation, calculation, special case handling, and result formatting all within single functions.

A problematic aspect is the mixing of **abstraction levels**. For example, `happinessIndex()` combines low-level loop operations with high-level conceptual scoring, which could make it difficult to understand and maintain. This violates the principle that **functions should descend only one level of abstraction**.

## Personal growth and learning

Writing code with a "beginner mindset" for this assignment was initially liberating, as I could focus on making things work without worrying about elegant design. However, applying Clean Code analysis to this code has been enlightening. Now i understand that readable code isnt just about personal preference; its about **communication with future developers**, which includes my future self.

The **temporal coupling** in methods like `mode()` particularly struck me. The methods steps must be executed in a specific order (count occurrences, find maximum, extract modes), but this dependency isnt obvious from the code structure. It makes the code fragile and hard to modify.

## Most valuable clean code principles

Through this analysis, three principles came out on top as the most impactful for my coding practice:

1. **"Do One Thing"**: This principle would force me to create more focused, testable methods. Instead of monolithic functions, I would have clear, single-purpose tools.

2. **"Use Intention-Revealing Names"**: Good naming serves as inline documentation. Names like `calculateHappinessForNumber()` immediately communicate purpose better than algorithmic descriptions.

3. **"Extract Till You Drop"**: Breaking down complex methods into smaller pieces makes code more modular and reusable. Each extracted method becomes a building block for other functionality.

## Disagreements and more nuanced views

While i generally embrace Clean Code principles, I found myself questioning the extreme emphasis on very short functions (2-4 lines). In my statistical domain, some calculations naturally group together conceptually. Breaking `variance()` into multiple single-line functions might fragment the mathematical concept unnecessarily.

But I do understand that this tension reflects my beginner perspective. As Uncle Bob argues, **readability trumps brevity**. Even if it means more methods, each focused function is easier to test, debug, and understand.

## For future development

This analysis has changed how I approach coding. I now see that **clean code is about respect**, respect for future maintainers, users of my API, and the craft of programming itself. The "beginner" approach of putting everything in one place feels efficient but creates technical "debt", one could say.

Moving forward, I plan to apply **Test-Driven Development** principles alongside Clean Code. Writing tests first would naturally encourage smaller, more focused functions. I also want to use **pair programming** techniques, as explaining code to others usually immediately reveals naming and structural problems.

## Conclusion

The Clean Code analysis revealed that my supposedly "beginner-written" code actually contains both beginner mistakes and some unconsciously good practices. The key insight is that **code quality isn't accidental**; it requires intentional application of principles like meaningful naming and focused function design.

Even though my StatisticsCalculator works correctly and passes all tests, it could be much more maintainable and professional with Clean Code refactoring. The most valuable lesson is that clean code isnt just about following rules; it's about **craftsmanship** and **communication**. Every method name and function structure is an opportunity to make the codebase more welcoming to future developers.