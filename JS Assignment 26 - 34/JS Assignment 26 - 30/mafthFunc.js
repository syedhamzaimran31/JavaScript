//Math methods
//          Chapter 26-30

//Q1
let positiveInteger = prompt("Enter a positive Integer", "2.28");
document.write("Original value: " + positiveInteger + "<br>");
document.write("Rounded value: " + Math.round(positiveInteger) + "<br>");
document.write("Floor value: " + Math.floor(positiveInteger) + "<br>");
document.write("Ceil value: " + Math.ceil(positiveInteger) + "<br><br>");

//Q2
let negativeInteger = prompt("Enter a negative floating point number", "-3.28");
document.write("Original value: " + negativeInteger + "<br>");
document.write("Rounded value: " + Math.round(negativeInteger) + "<br>");
document.write("Floor value: " + Math.floor(negativeInteger) + "<br>");
document.write("Ceil value: " + Math.ceil(negativeInteger) + "<br><br>");

//Q3
let absoluteInteger = prompt(
  "Enter any number to see its absolute value",
  "-7"
);
document.write("Original value: " + absoluteInteger + "<br>");
document.write("Absolute value: " + Math.abs(absoluteInteger) + "<br><br>");

//Q4
let diceRoll = Math.ceil(Math.random() * 6);
alert(`You rolled a: ${diceRoll}`);
document.write(`You rolled a: ${diceRoll} <br><br>`);

//Q5
let coinValue = Math.floor(Math.random() * 2) + 1;
if (coinValue === 1) {
  alert(`Random coin value : ${coinValue}\nRandom coin value : Heads`);
  document.write(
    `Random coin value : ${coinValue} <br> Random coin value : Heads <br><br>`
  );
}

if (coinValue === 2) {
  alert(`Random coin value : ${coinValue}\nRandom coin value : Tails`);
  document.write(
    `Random coin value : ${coinValue} <br> Random coin value : Tails <br><br>`
  );
}

//Q6
let randomNumber = Math.ceil(Math.random() * 100);
document.write(
  `The random number you get between 1 and 100 is: ${randomNumber} <br><br>`
);

//Q7
function parseWeight() {
  var userInput = prompt("Please enter your weight:");

  var regex = /^(\d+(\.\d+)?)(kgs?|kilograms?)?$/i;

  var match = userInput.match(regex);

  if (match) {
    var weight = parseFloat(match[1]);
    var unit = match[3] || "kgs";
    alert("Your weight is: " + weight.toFixed(2) + " " + unit);
  } else {
    alert("Invalid input. Please enter a valid weight.");
  }
}
parseWeight();

//Q8
let secretNumber = Math.ceil(Math.random() * 10);
let userGuess = Number(
  prompt(
    "Guess the Secret Number: \nHint: The secret number is between 1 to 10"
  )
);

if (userGuess === secretNumber) {
  alert(`Congratulations! You guess the number: ${secretNumber}`);
  document.write(`Congratulations! You guess the number: ${secretNumber}`);
} else {
  alert(`Yod did not guess the correct number, Better luck next time! `);
  document.write(
    `Yod did not guess the correct number, Better luck next time!`
  );
}
