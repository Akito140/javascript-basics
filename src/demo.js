import {
  ageCheckMessage,
  colorsWithYellow,
  countEvens,
  gradeFromScore,
  groupByParity,
  hasPairWithSum,
  sumOneToFifty,
} from "./index.js";

console.log("Age check:", ageCheckMessage(20));
console.log("Grade:", gradeFromScore(85));
console.log("Sum from 1 to 50:", sumOneToFifty());
console.log("Colors:", colorsWithYellow);
console.log("Even values:", countEvens([1, 2, 3, 4, 6]));
console.log("Pair with sum:", hasPairWithSum([1, 2, 4, 4], 8));
console.log("Grouped by parity:", groupByParity([1, 2, 3, 4, 5]));
