export function sumArray(numbers) {
  let sum = 0;
  for (const number of numbers) sum += number;
  return sum;
}

export function maxInArray(numbers) {
  if (numbers.length === 0) return null;

  let maximum = numbers[0];
  for (const number of numbers) {
    if (number > maximum) maximum = number;
  }
  return maximum;
}

export function countEvens(numbers) {
  let count = 0;
  for (const number of numbers) {
    if (number % 2 === 0) count += 1;
  }
  return count;
}

export function reverseArray(arr) {
  const reversed = [];
  for (let index = arr.length - 1; index >= 0; index -= 1) {
    reversed.push(arr[index]);
  }
  return reversed;
}

export function indexOfElement(arr, value) {
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === value) return index;
  }
  return -1;
}

export function getPositiveNumbers(numbers) {
  const positives = [];
  for (const number of numbers) {
    if (number > 0) positives.push(number);
  }
  return positives;
}

export function uniqueValues(arr) {
  const unique = [];
  for (const value of arr) {
    if (!unique.includes(value)) unique.push(value);
  }
  return unique;
}

export function rotateRight(arr, k) {
  if (arr.length === 0) return [];
  const offset = ((k % arr.length) + arr.length) % arr.length;
  return [...arr.slice(-offset), ...arr.slice(0, -offset)];
}

export function secondLargest(numbers) {
  let largest;
  let second;

  for (const number of numbers) {
    if (largest === undefined || number > largest) {
      second = largest;
      largest = number;
    } else if (number !== largest && (second === undefined || number > second)) {
      second = number;
    }
  }

  return second === undefined ? null : second;
}

export function mergeAndSort(a, b) {
  return [...a, ...b].sort((first, second) => first - second);
}

export function wordLengths(words) {
  const lengths = [];
  for (const word of words) lengths.push(word.length);
  return lengths;
}

export function isSortedAscending(numbers) {
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < numbers[index - 1]) return false;
  }
  return true;
}

export function hasPairWithSum(numbers, target) {
  const seen = new Set();
  for (const number of numbers) {
    if (seen.has(target - number)) return true;
    seen.add(number);
  }
  return false;
}

export function flattenOnce(arr) {
  const flattened = [];
  for (const value of arr) {
    if (Array.isArray(value)) {
      for (const nestedValue of value) flattened.push(nestedValue);
    } else {
      flattened.push(value);
    }
  }
  return flattened;
}

export function groupByParity(numbers) {
  const groups = { even: [], odd: [] };
  for (const number of numbers) {
    groups[number % 2 === 0 ? "even" : "odd"].push(number);
  }
  return groups;
}
