export function countToTen() {
  const numbers = [];
  for (let number = 1; number <= 10; number += 1) {
    numbers.push(number);
  }
  return numbers;
}

export function countdownFromFive() {
  const numbers = [];
  let number = 5;
  while (number >= 1) {
    numbers.push(number);
    number -= 1;
  }
  return numbers;
}

export function sumOneToFifty() {
  let sum = 0;
  for (let number = 1; number <= 50; number += 1) {
    sum += number;
  }
  return sum;
}

export function numbersExceptSeven() {
  const numbers = [];
  for (let number = 1; number <= 10; number += 1) {
    if (number === 7) continue;
    numbers.push(number);
  }
  return numbers;
}

export function stopBeforeFifteen() {
  const numbers = [];
  for (let number = 1; number <= 20; number += 1) {
    if (number === 15) break;
    numbers.push(number);
  }
  return numbers;
}
