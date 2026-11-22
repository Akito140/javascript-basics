export const colors = ["Red", "Green", "Blue"];
export const colorsWithYellow = [...colors, "Yellow"];
export const numbers = [2, 4, 6, 8, 10];
export const data = [12, 4, 39, 21, 8];
export const books = [
  { title: "JavaScript Basics", pages: 180 },
  { title: "Learning Arrays", pages: 240 },
];

export function sumArrayValues(values) {
  let sum = 0;
  for (const value of values) {
    sum += value;
  }
  return sum;
}

export function largestArrayValue(values) {
  if (values.length === 0) return null;

  let largest = values[0];
  for (const value of values) {
    if (value > largest) largest = value;
  }
  return largest;
}
