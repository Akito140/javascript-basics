export const userName = "Aida";
export const userAge = 20;
export const isStudent = true;

export const firstName = "Aida";
export const lastName = "Uulu";
export const fullName = `${firstName} ${lastName}`;

export const num1 = 10;
export const num2 = 5;

export const arithmetic = {
  sum: num1 + num2,
  difference: num1 - num2,
  product: num1 * num2,
  quotient: num1 / num2,
};

export const testValue = 42;
export const testValueType = typeof testValue;

export function describeTypes() {
  return {
    string: typeof userName,
    number: typeof userAge,
    boolean: typeof isStudent,
    null: typeof null,
    undefined: typeof undefined,
    array: Array.isArray([]) ? "array" : typeof [],
  };
}

export function coerceValues(value) {
  return {
    number: Number(value),
    boolean: Boolean(value),
    string: String(value),
  };
}
