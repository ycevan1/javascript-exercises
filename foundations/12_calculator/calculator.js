const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  if (array.length == 0) {
    return 0;
  }
  
	return array.reduce((total, num) => {
    return total + num;
  });
};

const multiply = function(array) {
  return array.reduce((total, num) => {
    return total * num;
  })
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(num) {
	let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
