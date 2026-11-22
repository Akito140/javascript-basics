import test from "node:test";
import assert from "node:assert/strict";
import {
  countEvens,
  flattenOnce,
  getPositiveNumbers,
  groupByParity,
  hasPairWithSum,
  indexOfElement,
  isSortedAscending,
  maxInArray,
  mergeAndSort,
  reverseArray,
  rotateRight,
  secondLargest,
  sumArray,
  uniqueValues,
  wordLengths,
} from "../src/array-practice.js";

test("array reductions and searches", () => {
  assert.equal(sumArray([1, 2, 3, 4]), 10);
  assert.equal(sumArray([]), 0);
  assert.equal(maxInArray([3, 10, 5]), 10);
  assert.equal(maxInArray([]), null);
  assert.equal(countEvens([1, 2, 3, 4, 6]), 3);
  assert.equal(indexOfElement(["a", "b", "c"], "b"), 1);
  assert.equal(indexOfElement([10, 20, 30], 5), -1);
});

test("array transforms do not mutate their inputs", () => {
  const input = [1, 2, 3];
  assert.deepEqual(reverseArray(input), [3, 2, 1]);
  assert.deepEqual(input, [1, 2, 3]);
  assert.deepEqual(getPositiveNumbers([-3, 0, 2, 5, -1]), [2, 5]);
  assert.deepEqual(uniqueValues([1, 2, 2, 3, 1]), [1, 2, 3]);
  assert.deepEqual(rotateRight([1, 2, 3, 4], 2), [3, 4, 1, 2]);
  assert.deepEqual(rotateRight([1, 2, 3], 0), [1, 2, 3]);
  assert.deepEqual(rotateRight([], 3), []);
  assert.deepEqual(mergeAndSort([3, 1], [4, 2]), [1, 2, 3, 4]);
  assert.deepEqual(wordLengths(["apple", "hi", "JS"]), [5, 2, 2]);
  assert.deepEqual(flattenOnce([1, [2, 3], 4]), [1, 2, 3, 4]);
});

test("ordering, pairs, and parity", () => {
  assert.equal(secondLargest([10, 5, 20]), 10);
  assert.equal(secondLargest([3, 3, 3]), null);
  assert.equal(secondLargest([1]), null);
  assert.equal(secondLargest([-10, -5, -20]), -10);
  assert.equal(isSortedAscending([1, 2, 2, 3]), true);
  assert.equal(isSortedAscending([3, 2, 1]), false);
  assert.equal(isSortedAscending([]), true);
  assert.equal(hasPairWithSum([1, 2, 4, 4], 8), true);
  assert.equal(hasPairWithSum([1, 2, 3, 9], 8), false);
  assert.deepEqual(groupByParity([1, 2, 3, 4, 5]), {
    even: [2, 4],
    odd: [1, 3, 5],
  });
});
