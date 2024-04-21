//                  JavaScript Assignment-03
//                  Chapter 12-13
           


document.getElementById("Chapter12_13").innerHTML=("Chapter 12-13");
// Q1
var input=prompt("Enter a charcter, number or an alphabet","A");
if(input>='A' && input <= 'Z'){
    document.getElementById("Question1").innerHTML="Input is an Upper case letter";
} else if(input>='a' && input <= 'z'){
    document.getElementById("Question1").innerHTML="Input is a Lower case letter";
} else {
    document.getElementById("Question1").innerHTML="Input is a number";
}
document.write("<br>");


//Q2
var number1=parseInt(prompt("Enter the first integer","0"));
var number2=parseInt(prompt("Enter the second number","0"));

if(number1 > number2){
    document.getElementById("Question2").innerHTML=`${number1} is greater`;
} else if(number2 > number1){
    document.getElementById("Question2").innerHTML=`${number2} is greater`;
} else {
    document.getElementById("Question2").innerHTML=`${number1} and ${number2} are equal`;
}
document.write("<br>");

// Q3
var input3=parseInt(prompt("Enter an integer:","0"));

if(input3 > 0){
    document.getElementById("Question3").innerHTML=`${input3} is a positive number`;
}else if(input3 < 0){
    document.getElementById("Question3").innerHTML=`${input3} is a negative number`;
} else{
    document.getElementById("Question3").innerHTML=`${input3} is a zero`;
}
document.write("<br>");

// Q4
var input4=prompt("Enter an alphabet");
var isVowel=false;
if (input4.length==1) {
    if ((input4=='a'||input4=='A') || (input4=='e'||input4=='E') || (input4=='i'||input4=='I')
    || (input4=='o'||input4=='O')|| (input4=='u'||input4=='U')) {
        isVowel=true;
        document.getElementById("Question4").innerHTML=isVowel;
    } else {
        document.getElementById("Question4").innerHTML=isVowel;
    }
}else{
    document.getElementById("Question4").innerHTML=`Enter an alphabet or a character`;
}
document.write("<br>");


// Q5
var correctPassword="hamza123";
var inputPassword=prompt("Enter a password");

if (inputPassword !=="") {
    if (inputPassword === correctPassword ) {
        document.getElementById("Question5").innerHTML=`Correct Passowrd!`;
    } else{
        document.getElementById("Question5").innerHTML=`Incorrect Passowrd!`;
    }
} else {
    document.getElementById("Question5").innerHTML=`Enter Password!`;

}
document.write("<br>");


//Q6 Correct Answer
var greeting;
var hour=13;
if (hour < 13) {
    greeting="Good day";
    document.getElementById("Question6").innerHTML=greeting;
} else {
    greeting="Good evening";
    document.getElementById("Question6").innerHTML=greeting;
}
document.write("<br>");

//Q7
var time=(prompt("Enter time = between 0 to 2539",""));

if (time !== "") {
    if (time>=0 && time < 1200) {
        document.getElementById("Question7").innerHTML=`Good morning!`;
    } else if (time >= 1200 && time < 1700) {
        document.getElementById("Question7").innerHTML=`Good aftenoon!`;
    } else if(time >= 1700 && time < 2100){
        document.getElementById("Question7").innerHTML=`Good evening!`;
    } else if(time >= 2100 && time <= 2359){
        document.getElementById("Question7").innerHTML=`Good night!`;
    } else {
        document.getElementById("Question7").innerHTML=`Enter correct time duration!`;
    }
} else {
    document.getElementById("Question7").innerHTML=`Time field must no be empty`;   
}

document.write("<br>");

 //             Chapter 14-16


 //Q1
 let studentNames=[];

 //Q2
 let studentNames2=new Array();


 //Q3
 let myStringArray=["Hamza","Imran","Syed","Yousuf"];


 //Q4
let myNumbersArray=[1,3,5,7,9,11];

//Q5
let myBooleanArray=[true,false,false,true];

//Q6
let myMixedArray=["Hamza",1,true];

//Q7
let qualificationsInPak=["SSC","HSC","BCS","BS","BCOM","MS","M.phil.","PhD."];
var qualifications=" ";
for(var i=0; i < qualificationsInPak.length;i++){
 qualifications+=`${i}) ${qualificationsInPak[i]}<br>`;
}
document.getElementById("Question7_ii").innerHTML=`Qualifications:<br><br> ${qualifications}`;
document.write("<br>");

//Q8
let studentNames3=["Hamza","Ali","Imran"];
let scoreOfStudents=[450,360,490];
var score_Percentage=" ";
for(var i=0; i < 3; i++){
        score_Percentage+=`Score of ${studentNames3[i]} is ${scoreOfStudents[i]}.
        Percentage: ${(scoreOfStudents[i]/500)*100}%<br>`;
}
document.getElementById("Question8_ii").innerHTML=score_Percentage;

//Q9
let colorNames=["Red","Yellow","Green"];
document.write(`${colorNames.join(" , ")} <br>`);

var colorAdd=prompt("Enter color you want to add at beginning","black");
colorNames.unshift(colorAdd);
document.write(`${colorNames.join(" , ")} <br>`);

var colorAdd2=prompt("Enter the color you want to add at the end","black");
colorNames.push(colorAdd2);
document.write(`${colorNames.join(" , ")} <br>`);

colorNames.unshift("white","orange");
document.write(`${colorNames.join(" , ")} <br>`);

colorNames.shift();
document.write(`${colorNames.join(" , ")} <br>`);

colorNames.pop();
document.write(`${colorNames.join(" , ")} <br>`);

var colorIndex=prompt("Enter the index at which you want to add the color",0);
var colorAdd3=prompt("Enter the color you want to add ","black");
colorNames.splice(colorIndex,0,colorAdd3);
document.write(`${colorNames.join(" , ")} <br>`);

var colorIndex2=prompt("Enter the index from which you want to delete the colors",0);
var colorRemove=prompt("Enter the amount of colors you want to remove ",1);
colorNames.splice(colorIndex2,colorRemove);
document.write(`${colorNames.join(" , ")} <br>`);
document.write("<br>");


//Q10
let studentScore=[100,98,75,86,54,89,71,60,18];
document.write(`Score of students: ${studentScore}<br>`);

document.write(`The ordered score of students: ${studentScore.sort(function(a, b){return a - b})}<br>`);
document.write("<br>");

//Q11
let cityNames=["Karachi","Islamabad","Quetta","Peshawar","Lahore"];
document.write(`${cityNames.join(" , ")}<br>`);

let selectedCityNames=`${cityNames.slice(1,4)}<br>`;
document.write(selectedCityNames);
document.write("<br>");


//Q12
let myArray=["This","is","my","cat"];
document.write(`${myArray}<br>`);

document.write(`${myArray.join(" ")}<br>`);
document.write("<br>");


//Q13
let newArray=[];
newArray[0]="Keyboard";
newArray[1]="Mouse";
newArray[2]="Monitor";
newArray[3]="CPU";
newArray[4]="Camera";
var storingValues=" ";
for(var i=0; i < newArray.length; i++){
    storingValues+=`${newArray[i]}<br>`;
}
document.write(storingValues);
document.write("<br>");


//Q14
let newArray2=[];
newArray2[0]="Keyboard";
newArray2[1]="Mouse";
newArray2[2]="Monitor";
newArray2[3]="CPU";
newArray2[4]="Camera";
var storingValues2=" ";
newArray2.reverse();
for(var i=0; i < newArray.length; i++){
    storingValues2+=`${newArray2[i]}<br>`;
}
document.write(storingValues2);
document.write("<br>");

//Q15
var fruits = ["Apple", "Samsung", "Motorola", "Nokia", "Sony","Haier"];

    document.write('<label for="fruitSelect">Select a fruit:</label>');
    document.write('<select id="fruitSelect">');

    for (var i = 0; i < fruits.length; i++) {
        document.write('<option value="' + fruits[i] + '">' + fruits[i] + '</option>');
    }
    document.write('</select>');