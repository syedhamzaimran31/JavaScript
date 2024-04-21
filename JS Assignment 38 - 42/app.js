// JS Assignment 38 - 42
//Q1
document.write("1) ");
function power(number, power) {
  let result = Math.pow(number, power);
  return document.write(`${number}<sup>${power}</sup> = ${result} <br><br>`);
}
power(5, 2);

//Q2
document.write("2) ");
let year = prompt("Enter a year :", 2018);
function isLeap(year) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      document.write(`${year} is a leap year <br><br>`);
    } else {
      document.write(`${year} is not a leap year <br><br>`);
    }
  } else if (year % 4 == 0) {
    document.write(`${year} is a leap year <br><br>`);
  } else {
    document.write(`${year} is not a leap year <br><br>`);
  }
}
isLeap(year);

//Q3
document.write("3) ");
let a = 20;
let b = 20;
let c = 20;

function finding_S(a, b, c) {
  let S = (a + b + c) / 2;
  return S;
}
function area(a, b, c, result_S) {
  let resultArea = (result_S - a) * (result_S - b) * (result_S - c);
  console.log(resultArea);
  resultArea = Math.sqrt(resultArea * result_S).toFixed(2);
  return resultArea;
}
var result_S = finding_S(a, b, c);
document.write(`Area of triange is : ${area(a, b, c, result_S)} <br><br>`);

//Q4
document.write("4) ");
let marksSubject1 = 80;
let marksSubject2 = 70;
let marksSubject3 = 90;

function main(English, Maths, Computer) {
  function averageMarks() {
    let averageMarks = (English + Maths + Computer) / 3;
    return `The Average Marks are: ${averageMarks} <br>`;
  }
  document.write(averageMarks());
  function percentageMarks() {
    let percentEng = (English / 100) * 100 + "%";
    let percentMath = (Maths / 100) * 100 + "%";
    let percentComp = (Computer / 100) * 100 + "%";
    document.write(
      `Subject 1 Marks in percent :${percentEng}<br>Subject 2 Marks in percent : ${percentMath} <br>Subject 3 Marks in percent : ${percentComp}<br><br>`
    );
  }
  percentageMarks();
}
main(marksSubject1, marksSubject2, marksSubject3);

//Q5
document.write("5) ");
let str = prompt("Enter a string", "My name is Hamza");
let character = prompt(
  "Enter a character you want to find from the string",
  "a"
);
function indexFind(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == character) {
      document.write(
        `In '${str}' the character '${character}' is at : ${i}<sup>th</sup> index <br><br>`
      );
      break;
    }
  }
}
indexFind(str);

//Q6
document.write("6) ");
let str_6 = "My name is Hamza";
document.write(`String with Vowels : '${str_6}' <br>`);
function removeVowels(str_6) {
  const noVowels = str_6.replace(/[aeiou]/gi, "");
  return noVowels;
}
document.write(`String without Vowels : '${removeVowels(str_6)}'<br><br>`);

//Q7
document.write("7) ");
let str_7 = "Pleases read this application and give me gratuity";
function countingVowels(str_7) {
  let count = 0;
  for (let i = 1; i < str_7.length; i++) {
    let currentChar = str_7[i].toLowerCase();
    let prevChar = str_7[i - 1].toLowerCase();

    if ("aeiou".includes(prevChar) && "aeiou".includes(currentChar)) {
      count++;
      console.log(prevChar + currentChar);
    }
  }
  document.write(`Consecutive Vowels count are : ${count} <br><br>`);
}

countingVowels(str_7);

// Q8
document.write("8) ");
let distance_8 = Number(prompt("Enter distance between two cities (km)", 20));
function inMeters(distance_8) {
  let meter = distance_8 * 1000;
  return meter;
}
function inFeet(distance_8) {
  let feet = distance_8 * 3280.84;
  return feet;
}
function inInch(distance_8) {
  let inch = distance_8 * 39370.1;
  return inch;
}
function inCm(distance_8) {
  let cm = distance_8 * 100000;
  return cm;
}
document.write(`The distance in meters is : ${inMeters(distance_8)}<br>`);
document.write(`The distance in feets is : ${inFeet(distance_8)}<br>`);
document.write(`The distance in inches is : ${inInch(distance_8)}<br>`);
document.write(`The distance in centimeters is : ${inCm(distance_8)}<br><br>`);

//Q9
document.write("9) ");
let hoursWorked = Math.round(43.6);
let overtimeRate = 12;
let normalHours = 40;
function overTimePay(hoursWorked, overtimeRate, normalHours) {
  let overTimePay = (hoursWorked - normalHours) * overtimeRate;
  return overTimePay;
}
document.write(`The overtime pay is :
  ${overTimePay(hoursWorked, overtimeRate, normalHours)} <br><br>`
);

// Q10
document.write("10) ");
let withdawlAmount = prompt("Enter the amount to be withdrawn", 770);
let notes_100 = 0;
let notes_50 = 0;
let notes_10 = 0;
function findCurrencyNotes(notes_10, notes_50, notes_100, withdawlAmount) {
  notes_100 = Math.floor(withdawlAmount / 100);
  withdawlAmount = withdawlAmount - notes_100 * 100;

  notes_50 = Math.floor(withdawlAmount / 50);
  withdawlAmount = withdawlAmount - notes_50 * 50;

  notes_10 = Math.floor(withdawlAmount / 10);
  withdawlAmount = withdawlAmount - notes_10 * 10;

  document.write(
    `You will have '${notes_100}' hundred note(s) , '${notes_50}' fifty note(s) and '${notes_10}' ten note(s)`
  );
}
findCurrencyNotes(notes_10, notes_50, notes_100, withdawlAmount);
