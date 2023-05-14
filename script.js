var multiply = function (num1, num2) {
  if (typeof num1 !== "number") {
    return "You need to provide two numbers.";
  } else if (typeof num2 !== "number") {
    return "You need to provide two numbers.";
  }
  return num1 * num2;
};

multiply(3, 5);
console.log(multiply(3, 5));
