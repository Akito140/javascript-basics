export function greetUser(name) {
  return `Hello, ${name}!`;
}

export function calculateArea(width, height) {
  return width * height;
}

export const calculateAreaArrow = (width, height) => width * height;

export function power(base, exponent = 2) {
  return base ** exponent;
}

export function scopeExample() {
  const localMessage = "This variable only exists inside scopeExample.";
  return localMessage;
}

// Accessing localMessage here would throw ReferenceError because it is block-scoped.
