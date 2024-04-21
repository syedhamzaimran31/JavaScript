// JS Assignment
// Chapters 35 - 38

//Q1
document.write("1) ");
function dateFunction() {
  const date = Date();
  return document.write(date + "<br><br>");
}
dateFunction();

//Q2
document.write("2) ");
function greetFunction(firstName, lastName) {
  return document.write(`Hello ${firstName + lastName}.<br><br>`);
}
greetFunction("Hamza", " Imran");

//Q3
document.write("3) ");
function sumFunction() {
  let num1 = Number(prompt("Enter first number", 5));
  let num2 = Number(prompt("Enter second number", 10));
  let sum = num1 + num2;
  return document.write(`Sum : ${sum}<br><br>`);
}
sumFunction();

//Q4
document.write("4) ");
function desiredOperation(num1, num2, operation) {
  switch (operation) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;

    default:
      return document.write("Wrong operation");
      break;
  }
}
document.write(
  ` The answer of desired operation is :  ${desiredOperation(
    10,
    2,
    "*"
  )}<br><br>`
);

//Q5
document.write("5) ");
function squareFunction(squareNumber) {
  return squareNumber * squareNumber;
}
document.write(`The square of the number is : ${squareFunction(5)}<br><br>`);

//Q6
document.write("6) ");
function factorialFunction(factorialNumber) {
  for (let i = factorialNumber - 1; i > 0; i--) {
    factorialNumber = factorialNumber * i;
  }
  return factorialNumber;
}
document.write(`The factorial is : ${factorialFunction(8)}<br><br>`);

//Q7
document.write("7) ");
function counting(startNum, endNum) {
  document.write("Counting is : ");
  for (let i = startNum; i <= endNum; i++) {
    if (i < endNum) {
      document.write(`${i}, `);
    }
    if (i == endNum) {
      document.write(` ${i} <br><br>`);
    }
  }
}
counting(
  prompt("Enter starting number of count", 10),
  prompt("Enter ending number of count", 20)
);

//Q8
document.write("8) ");
function hypotenusFunction(base, perpendicular) {
  var hypotenuse = base * perpendicular;

  function hypotenusSquare() {
    hypotenuse = hypotenuse * hypotenuse;
    return document.write(
      `The hypotenuse of right angle triangle is : ${hypotenuse} <br><br>`
    );
  }
  hypotenusSquare();
}
hypotenusFunction(
  prompt("Enter base of triangle", 3),
  prompt("Enter perpendicular of triangle", 4)
);

//Q9
document.write("9) ");
function areaOfRectengle(width, height) {
  let area = width * height;
  return area;
}
width_9 = 10;
height_9 = 5;
document.write(
  `(i) Arguments as values :<br>Area of rectengle is : ${areaOfRectengle(
    10,
    5
  )}<br>
   (ii) Arguments as variables :<br> Area of rectengle is : ${areaOfRectengle(
     width_9,
     height_9
   )}<br><br> `
);

//Q10
document.write("10) ");
const string_10 = "madam";
function checkIfPalindrome(str) {
  str = str.toString().split("").reverse().join("");
  if (string_10 == str) {
    document.write(`The string ${string_10} is a palindrome string <br><br>`);
  } else {
    document.write(
      `The string ${string_10} is not a palindrome string <br><br>`
    );
  }
}
checkIfPalindrome(string_10);

//Q11
document.write("11) ");
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
string_11 = "the quick brown fox jumps";
document.write(
  `After converting into TitleCase : ${toTitleCase(string_11)} <br><br>`
);

//Q12
document.write("12) ");
function find_longest_word(str) {
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];
  console.log(result);
  for (var x = 1; x < array1.length; x++) {
    if (result.length < array1[x].length) {
      result = array1[x];
    }
  }
  return result;
}
const string_12 = "Web Development Tuotorial";
document.write(
  `The longest word in '${string_12}' is : '${find_longest_word(
    string_12
  )}'.<br><br>`
);

//Q13
document.write("13) ");
function charAt_Fun(string_13, letter) {
  var countLetter = 0;
  for (let i = 0; i < string_13.length; i++) {
    var string_13Char = string_13.charAt(i);
    console.log(string_13);
    if (string_13Char == letter) {
      countLetter++;
    }
  }
  return countLetter;
}
const string_13 = "hamzaimran@@3gamil.com";
const letter = "a";
document.write(
  `The letter '${letter}' is found in string '${string_13}', ${charAt_Fun(
    string_13,
    letter
  )} times. <br><br>`
);

//14
document.write("14) ");
function calcCircumference(radius) {
  const circumferenceCirc = (2 * pi * radius).toFixed(2);
  return document.write(
    `The circumference of Cirle is : ${circumferenceCirc}<br>`
  );
}
function calcArea(radius) {
  const areaCircle = (pi * radius * radius).toFixed(2);
  return document.write(`The area of circle is : ${areaCircle}<br><br>`);
}
const pi = 3.14;
calcCircumference(5);
calcArea(5);
