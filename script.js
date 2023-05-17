var multiply = function (num1, num2) {
  if (typeof num1 !== "number") {
    console.log("Please provide two numbers.");
  }
  if (typeof num2 !== "number") {
    console.log("Please provide two numbers.");
  }
  return num1 * num2;
};

console.log(multiply(2, 4));
console.log(multiply(10, 3));
console.log(multiply(6, 13));
