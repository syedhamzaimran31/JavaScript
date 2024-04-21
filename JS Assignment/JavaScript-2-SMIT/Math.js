//    CHAPTER 5 (JavaScript Assignment-02)


//Q1)
let a=20;
let b=10;
let sum=a+b;
document.getElementById("Question1").innerHTML=`The sum of ${a} and ${b} is: ${sum}`;

//Q2
let subtraction=a-b;
let multiplication=a*b;
let division=a/b;
let modulus=a%b;
document.getElementById("Question2").innerHTML=`The subtraction of ${a} and ${b} is: ${subtraction}<br>
The multiplication of ${a} and ${b} is: ${multiplication}<br> The division of ${a} and ${b} is: ${division}<br> 
The modulus of ${a} and ${b} is: ${modulus}`

//Q3
let number;
document.getElementById("Question3_i").innerHTML=`Value after variable declaration is: ${number}<br>`;
number=20;
document.getElementById("Question3_ii").innerHTML=`Initial value is: ${number}<br>`;
number++;
document.getElementById("Question3_iii").innerHTML=`Value after increment is: ${number}<br>`;
number+=7;
document.getElementById("Question3_iv").innerHTML=`Value after addition is: ${number}<br>`;
number--;
document.getElementById("Question3_v").innerHTML=`Value after decrement is: ${number}<br>`;
number%=3;
document.getElementById("Question3_vi").innerHTML=`The remainder is: ${number}<br>`;

//Q4
let movieTicket=600;
document.getElementById("Question4").innerHTML=`The cost of buying 5 tickets to a movie is:
 ${movieTicket*5} <br>`;

//Q5
let tableNumber=2;
let completeTable=" ";
for(let i=1; i<11 ; i++){
    completeTable+=`${tableNumber} * ${i} = ${tableNumber * i}<br>`
}
document.getElementById("Question5").innerHTML=completeTable;

//Q6
let celsius=38;
let fahrenhite=71;
let celsiusToFahrenhite=(celsius*9/5)+32;
let fahrenhiteToCelsius=(fahrenhite-32)*5/9;
fahrenhiteToCelsius=fahrenhiteToCelsius.toFixed(2);

document.getElementById("Question6").innerHTML=`${celsius}C is ${celsiusToFahrenhite}F <br>
${fahrenhite}F is ${fahrenhiteToCelsius}C <br>`

//Q7
let priceItem1=500;
let priceItem2=700;
let quantityItem1=3;
let quantityItem2=4;
let shippingCharges=100;
let totalCost=(priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
document.getElementById("Question7").innerHTML=`Price of Item 1 is: ${priceItem1}<br>
Quantity of Item 1 is: ${quantityItem1} <br> Price of Item 2 is: ${priceItem2} <br>
Quantity of Item 2 is: ${quantityItem2} <br> Shipping Charges: ${shippingCharges}<br>
Total cost of Order is: ${totalCost} `;

//Q8
var totalMarks=500;
var marksObtained=378;
var percentageMarks=(marksObtained/totalMarks)*100;
document.getElementById("Question8").innerHTML=`Total Marks: ${totalMarks}<br>
Marks Obtained: ${marksObtained} <br> Percentage: ${percentageMarks} % <br> `;

//Q9
var USD=10;
var saudiRiyal=25;
var toPKR=(USD*308.17)+(saudiRiyal*82.17);
toPKR=toPKR.toFixed(2);
document.getElementById("Question9").innerHTML=`Crrency after converted into PKR is: ${toPKR}<br>`;

//Q10
var anyNumber=20;
var calculations=((anyNumber+5)*10)/2
document.getElementById("Question10").innerHTML=`The result is: ${calculations} <br>`;

//Q11
var currentYear=2023;
var birthyear=2001;
var birthyear2=2000;
var findingAge=(currentYear-birthyear);
var findingAge2=(currentYear-birthyear2);
document.getElementById("Question11").innerHTML=`Current Year: ${currentYear} <br>
Birth Year: ${birthyear} or ${birthyear2} <br> Your age is : ${findingAge} or ${findingAge2} <br>`;

//Q12
var radius=12;
var pi=3.14;
var circumference=(2*pi*radius);
var areaOfCircle=(pi*radius*radius);
areaOfCircle=areaOfCircle.toFixed(2)
document.getElementById("Question12").innerHTML=`Radius of Circle: ${radius}<br>
Circumference of Circle is: ${circumference} <br> Area of Circle is: ${areaOfCircle} <br>`;

//Q13
var favouriteSnack="Chips";
var currentAge=22;
var maxAge=65;
var estimatedAmountPerDay=1;
//Calculating estimated amount need in days
var calculatingAmountInDays=((maxAge-currentAge)*365)*estimatedAmountPerDay;
document.getElementById("Question13").innerHTML=`Favourit Snack: ${favouriteSnack} <br>
Current Age: ${currentAge} <br> Estimated Maximum Age: ${maxAge} <br>
Amount of Snacks per day: ${estimatedAmountPerDay} <br>
You will need ${calculatingAmountInDays} ${favouriteSnack} to last you until the ripe 
old age of ${maxAge}.<br>`;