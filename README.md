# JavaScript Basics

Solutions for the **PS: JavaScript Basics** assignment. The repository covers
the 25 beginner exercises and all 15 array practice problems from the supplied
Reading and Research material.

## Run

Requires Node.js 18 or newer. No third-party packages are needed.

```sh
npm test
npm start
```

## Contents

- `src/variables.js` — declarations, types, coercion examples, and arithmetic.
- `src/conditionals.js` — even/odd, age, grade, ternary, and strict equality.
- `src/loops.js` — counting, countdown, sum, continue, and break.
- `src/functions.js` — greetings, area, scope, and default parameters.
- `src/arrays.js` — array declaration, iteration, sum, maximum, and books.
- `src/array-practice.js` — the 15 standalone array problem solutions.
- `src/demo.js` — a small runnable sample.
- `test/` — automated checks for expected results and important edge cases.

Each exercise is implemented as a reusable function or value and exported for
testing. The scope exercise documents the expected `ReferenceError` without
breaking the executable examples.

## Exercise coverage

The beginner solutions map to exercises 1–25 in order. Array practice includes
sum, maximum, even count, reverse, search, positive filtering, unique values,
right rotation, second-largest distinct value, numeric merge-sort, word
lengths, ascending-order check, pair sum, one-level flattening, and parity
grouping. Edge cases such as empty arrays, duplicate values, negative numbers,
and strict equality are covered by the tests.
