function sum(a, b) {
  return a + b;
}

function div(a, b) {
  return a / b;
}

// Using CommonJS, export a feature in module.

module.exports = {
  add: sum,
};
