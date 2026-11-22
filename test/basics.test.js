import test from "node:test";
import assert from "node:assert/strict";
import {
  ageCheckMessage,
  arithmetic,
  books,
  calculateArea,
  calculateAreaArrow,
  canVote,
  colors,
  colorsWithYellow,
  coerceValues,
  countToTen,
  countdownFromFive,
  data,
  describeTypes,
  evenOrOdd,
  firstName,
  fullName,
  gradeFromScore,
  greetUser,
  largestArrayValue,
  lastName,
  numbers,
  numbersExceptSeven,
  power,
  scopeExample,
  stopBeforeFifteen,
  strictlyEqual,
  sumArrayValues,
  sumOneToFifty,
  testValueType,
  userAge,
  userName,
  isStudent,
} from "../src/index.js";

test("variables and explicit coercion", () => {
  assert.deepEqual([userName, userAge, isStudent], ["Aida", 20, true]);
  assert.equal(fullName, `${firstName} ${lastName}`);
  assert.deepEqual(arithmetic, { sum: 15, difference: 5, product: 50, quotient: 2 });
  assert.equal(testValueType, "number");
  assert.deepEqual(describeTypes(), {
    string: "string",
    number: "number",
    boolean: "boolean",
    null: "object",
    undefined: "undefined",
    array: "array",
  });
  assert.deepEqual(coerceValues("0"), { number: 0, boolean: true, string: "0" });
});

test("conditionals cover boundaries and strict comparison", () => {
  assert.equal(evenOrOdd(4), "even");
  assert.equal(evenOrOdd(7), "odd");
  assert.equal(canVote(18), true);
  assert.equal(ageCheckMessage(17), "Cannot vote yet.");
  assert.deepEqual([gradeFromScore(90), gradeFromScore(80), gradeFromScore(70), gradeFromScore(69)], [
    "A", "B", "C", "F",
  ]);
  assert.throws(() => gradeFromScore(101), RangeError);
  assert.equal(strictlyEqual(5, "5"), false);
  assert.equal(strictlyEqual(5, 5), true);
});

test("loops return the expected sequences", () => {
  assert.deepEqual(countToTen(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  assert.deepEqual(countdownFromFive(), [5, 4, 3, 2, 1]);
  assert.equal(sumOneToFifty(), 1275);
  assert.deepEqual(numbersExceptSeven(), [1, 2, 3, 4, 5, 6, 8, 9, 10]);
  assert.deepEqual(stopBeforeFifteen(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
});

test("functions, parameters, and scope", () => {
  assert.equal(greetUser("Nurlan"), "Hello, Nurlan!");
  assert.equal(calculateArea(5, 8), 40);
  assert.equal(calculateAreaArrow(5, 8), 40);
  assert.equal(power(4), 16);
  assert.equal(power(2, 3), 8);
  assert.match(scopeExample(), /only exists inside/);
});

test("array basics", () => {
  assert.deepEqual(colors, ["Red", "Green", "Blue"]);
  assert.equal(colors[1], "Green");
  assert.deepEqual(colorsWithYellow, ["Red", "Green", "Blue", "Yellow"]);
  assert.deepEqual(numbers, [2, 4, 6, 8, 10]);
  assert.equal(sumArrayValues(numbers), 30);
  assert.equal(largestArrayValue(data), 39);
  assert.equal(largestArrayValue([]), null);
  assert.equal(books[1].title, "Learning Arrays");
});
