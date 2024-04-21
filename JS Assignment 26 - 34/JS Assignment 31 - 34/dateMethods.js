
// Chapters 31 - 34

// //Q1
const date = new Date();
document.write(`${date} <br><br>`);

//Q2
let month=date.getMonth();
const monthNames=["January","February","March","April","May","June","July",
"August","September","October","November","December"];
document.write(`Current month: ${monthNames[month]}<br><br>`);

//Q3
let day=date.getDay();
const dayName=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
alert(`Today is : ${dayName[day]}`);
document.write(`Today is : ${dayName[day]} <br><br>`);

//Q4
if(dayName === "Sun" || dayName === "Sat"){
    document.write(`It's a Fun day! <br><br>`);
} else{
    document.write(`It's a Working day! <br><br>`);
}

//Q5
 let dateOfMonth=date.getDate();
if (dateOfMonth < 16) {
    document.write(`First fifteen days of the month <br><br>`);
} else {
    document.write(`Last days of the month <br><br>`);
}

//Q6
let time = date.getTime();
document.write(`Current date: ${date} <br>`)
document.write(`Elapsed miliseconds since January 1, 1970: ${time} <br>`)
document.write(`Elapsed minutes since January 1, 1970: ${((time/1000)/60).toFixed(2)} <br><br>`)

// Q7
let hours_7 = date.getHours();
document.write(`Hours :${hours_7} <br>`);
if (hours_7 >= 0 && hours_7 < 12) {
  document.write(`It' AM <br><br>`)
} else {
    document.write(`It's PM <br><br>`)
}

//Q8
let laterDate=new Date(`Thu Dec 31 2020`);
document.write(`The later Date is : ${laterDate} <br><br>`);

//Q9
let ramadanDate=new Date(`Wednesday, March 22, 2023`);
let currentDate= date;
document.write(`The current Date : ${currentDate} <br>
The First day of this Ramdan : ${ramadanDate} <br>
${(((((currentDate - ramadanDate)/1000)/60)/60)/24).toFixed(2)} days have passed since 1st Ramadan 2023 <br><br>`);

//Q10
let startOfDec_15=new Date(`Thu Jan 1 2015`);
let refernceDate=new Date(`Sat Dec 05 2015 22:50:16`);
let secondsPassed=(refernceDate - startOfDec_15)/1000;
document.write(`On refernce date ${refernceDate},<br>${secondsPassed} seconds had passed since beginning of 2015. <br><br>`);

//Q11
function subtractHours(date, hours) {
  date.setHours(date.getHours() - hours);

  return date;
}
const subtractedHour = subtractHours(new Date(), 1);
document.write(
  `Current date : ${date}<br> 1 hour ago it was ${subtractedHour} <br><br>`
);

//Q12
function subtractYears(date, years) {
  date.setFullYear(date.getFullYear() - years);

  return date;
}
const subtractedYear = subtractYears(new Date(), 100);
alert(`Current Date: ${date}.\n100 years back, it was ${subtractedYear}.`)
document.write(`Current Date: ${date}<br>100 years back, it was ${subtractedYear}<br><br>`);

//Q13
let userAge=prompt("Enter your age",23);
let birthYear=(date.getFullYear() - userAge);
alert(`Your age is : ${userAge}\nYour birth year is : ${birthYear}`)
document.write(`Your age is : ${userAge}<br>Your birth year is : ${birthYear}`);

//Q14
let customerName = "Syed Hamza Imran";
let month_14 = "October";
let numberOfUnits = 290;
let chargesPerUnit = 10;
let netAmount_withinDueDate = numberOfUnits * chargesPerUnit;
let latePaymentSurcharge = 350;
let grossAmount_afterDueDate = netAmount_withinDueDate + latePaymentSurcharge;
document.write(`<h1>K-Electric Bill</h1><h3>Customer Name : ${customerName} <br>
Month : ${month_14} <br>Number of units : ${numberOfUnits} <br>
Charges per unit : ${chargesPerUnit} <br><br>
Net Amount Payable (within Due Date): ${netAmount_withinDueDate}<br>
Late Payment Surcharge : ${latePaymentSurcharge}<br>
Gross Amount Payable (after Due Date) : ${grossAmount_afterDueDate}</h3>`);


