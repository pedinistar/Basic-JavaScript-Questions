// Create a variable called myNumber and assign it a numerical value.
let myNumber = 10;

// Declare a constant variable PI and assign it the value of π.
const PI = 3.14;

// Write a code snippet to check if a number is even or odd using the modulus operator.
function oddOrEven(num){
  if (num%2==0) {
    return `${num} is even`
  }
  return `${num} is odd`
}
console.log(oddOrEven(12));
console.log(oddOrEven(13));

// Convert the following string to a number: "42"
console.log(typeof("42"));
console.log(typeof(Number("42")));
console.log(typeof(parseInt("42")));

// Write an if statement to check if a user is older than 18 and log "Allowed" or "Not allowed" accordingly.
function checkAge(age) {
  if (age>18) {
    return "Allowed";
  }
  return "Not allowed"
}
console.log(checkAge(12));
console.log(checkAge(18));
console.log(checkAge(19));

// Implement a simple calculator using a switch statement for addition, subtraction, multiplication, and division.
function calculator(num1, num2, operation) {
  switch (operation) {
    case "+":
      return num1+num2;
      break;
    case "-":
      return num1+num2;
      break;
    case "*":
      return num1+num2;
      break;
    case "/":
      if (num1===0 || num2===0) {
        return "We cannot divide with 0";
      }
      return num1/num2;
      break;
    default:
      return "Give valid parameters "
      break;
  }
}

console.log(calculator(2,3,"+"));


// Write a function called add that takes two parameters and returns their sum.
function add(a,b) {
  return a+b
}

// Create an anonymous function and assign it to a variable called multiply. Use it to multiply two numbers.
let multiply = (a,b) => {
  return a*b
}

console.log(multiply(2,4));


// Declare an array called colors with three different color strings.
let colors = ["red","blue","green"]
console.log(colors);

// Use the push method to add a new color to the array.
colors.push("purple")
console.log(colors);


// Create an object representing a person with properties like name, age, and gender.
let portfolio = {
  name: "sneha",
  age: 20,
  gender: "female"
}


// Access and log the age property using both dot notation and bracket notation.
console.log(portfolio.age);
// console.log(portfolio[age]);
console.log(portfolio['age']);


// Write a for loop that prints the numbers from 1 to 5.
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Use a while loop to print even numbers from 2 to 10.
let i = 2;
while (i<=10) {
  if (i%2==0) {
    console.log(i);
  }
  i++;
}