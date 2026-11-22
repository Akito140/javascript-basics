export function evenOrOdd(number) {
  return number % 2 === 0 ? "even" : "odd";
}

export function canVote(age) {
  return age >= 18;
}

export function ageCheckMessage(age) {
  return canVote(age) ? "Can vote" : "Cannot vote yet.";
}

export function gradeFromScore(score) {
  if (!Number.isFinite(score) || score < 0 || score > 100) {
    throw new RangeError("Score must be a number from 0 to 100.");
  }

  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  return "F";
}

export function strictlyEqual(temp1, temp2) {
  return temp1 === temp2;
}
