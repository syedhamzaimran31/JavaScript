                    // Chapter 17 to 20

//Q1
const emptyArray=[
    [],
    [],
    []
];
    console.log(emptyArray);

//Q2
const Array2=[
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];
console.log(Array2);

//Q3
let counting="";
for (let i = 1; i <= 10; i++) {
    counting += i+"<br>";
    
}
document.write(counting+"<br>");

//Q4
const tableNumber=prompt("Enter the number to show its table",2);
const tableLength=prompt("Enter the table length :");
let tableOutput="";
for (let i = 1; i <= tableLength; i++) {
     tableOutput+= `${tableNumber} * ${i} = ${tableNumber * i} <br>`;
}
document.write(tableOutput+"<br>");

//Q5
const fruits=["apple","banana","mango","orange","strawberry"];
let fruitsOutput="";
let fruitsOutput2="";
for (let i = 0; i < fruits.length; i++) {

 fruitsOutput+=fruits[i]+"<br>";
 fruitsOutput2+=`Element at index ${i} is ${fruits[i]} <br>`;   

}
document.write(fruitsOutput+"<br>");
document.write(fruitsOutput2+"<br>");

// Q6
let countingForward="";
for (let i = 1; i <= 15; i++) {
    countingForward += i+", ";
    
}
document.write(`Counting: <br>  <br> ${countingForward} <br><br>`);

let countingReverse="";
for (let i = 10; i >= 1; i--) {
    countingReverse += i+", ";
    
}
document.write(`Reverse counting: <br>  <br> ${countingReverse} <br><br>`);

let countingEven="";
for (let i = 0; i <= 20; i=i+2) {
    countingEven += i+", ";
    
}
document.write(`Even: <br>  <br> ${countingEven} <br><br>`);

let countingOdd="";
for (let i = 1; i <= 20; i=i+2) {
    countingOdd += i+", ";
    
}
document.write(`Odd: <br>  <br> ${countingOdd} <br><br>`);

let countingSeries="";
for (let i = 2; i <= 20; i=i+2) {
    countingSeries += i+"k, ";;
    
}
document.write(`Series: <br>  <br> ${countingSeries} <br><br>`);

//Q7
const bakeryItems=["cake","apple pie","cookies","chips","patties"];
const checkItem=prompt("Enter the item name you want to purchase fom bakery","cookies");
let itemIsFound=false;
for (let i = 0; i < bakeryItems.length; i++) {
    if (checkItem === bakeryItems[i]) {
        itemIsFound=true;
        document.write(`${checkItem} is available at index ${i} in our bakery<br><br>`);
    } 
}
    if (itemIsFound == false) {
        document.write(`We are sorry! ${checkItem} is not available in our bakery.<br><br>`);
    }

//Q8
let findingLargestNum=[24,53,78,91,12];
let largestNum=findingLargestNum[0];
for (let i = 1; i < findingLargestNum.length; i++) {
        if(findingLargestNum[i]  >  largestNum){
           largestNum = findingLargestNum[i];
        }
}
document.write(`Array items: ${findingLargestNum} <br> The largest number in the array is: ${largestNum} <br><br>`);

//Q9
let findingSmallestNum=[24,53,78,91,12];
let smallestNum=findingSmallestNum[0];
for (let i = 1; i < findingSmallestNum.length; i++) {
        if(findingSmallestNum[i]  <  smallestNum){
           smallestNum = findingSmallestNum[i];
        }
}
document.write(`Array items: ${findingSmallestNum} <br> The smallest number in the array is: ${smallestNum} <br><br>`);

//Q10
let multiplesOfFive="";
for (let i = 1; i <= 20; i++) {
    multiplesOfFive+=`${5 * i}, `;
}
document.write(multiplesOfFive + "<br><br>");

//                      Chapter 21-25

//Q1
let userFirstName=prompt("Enter your first Name","Hamza");
let userLastName=prompt("Enter your last name", "Imran");
let userFullName=userFirstName + " " + userLastName;
document.write(`Hey! ${userFullName}  <br><br>`);

//Q2
let favouritPhone=prompt("Enter your favourite mobile phone and model","Samung A4 Plus pro");
let favouritePhoneLength=favouritPhone.length;
document.write(`${favouritPhone} <br> Length of String is: ${favouritePhoneLength}<br><br>`);

//Q3
let findIndex="Pakistani";

for (let i = 0; i < findIndex.length; i++) {
    if (findIndex[i]=='n') {
        document.write(`String: ${findIndex} <br> Index of 'n' is: ${i} <br><br>`)
    }
    
}

// Q4
let findStringLastIndex="Hello World";
let lastIndex;
for (let i = 0; i < findStringLastIndex.length; i++) {
       if(findStringLastIndex[i] === 'l'){
    
        lastIndex=i;
       
    }
}
 document.write(`String: ${findStringLastIndex} <br> Last Index of 'l' is: ${lastIndex} <br><br>`);

// Q5
let indexCharacter="Pakistani";
document.write(`String: ${indexCharacter} <br> Character at index 3 is: ${indexCharacter[3]} <br><br>`);

//Q6
let userFirstName_6=prompt("Enter your first Name","Hamza");
let userLastName_6=prompt("Enter your last name", "Imran");
let userFullName_6=userFirstName_6.concat(" ",userLastName_6);
document.write(`Hey! ${userFullName_6}  <br><br>`);

//Q7
let replacingString="Hyderabad";
let newString=replacingString.replace("Hyder","Islam");
document.write(`City: ${replacingString} <br> After replacement: ${newString} <br><br>`);

//Q8
let originalString="Ali and Sami are best friends. They play cricket and football together.";
let replacedString=originalString.replace(/and/g,"&");
document.write(`Original string: ${originalString} <br> After replacement: ${replacedString} <br><br>`);

//Q9
let stringValue="472";
let convertedValue=Number(stringValue);
document.write(`Value: ${stringValue} <br> Type: ${typeof stringValue} <br>
 Value: ${convertedValue} <br> Type: ${typeof convertedValue} <br><br> `);

//Q10
let userInput=prompt("Enter any String to convert in Upper-Case","My Name");
document.write(`User input: ${userInput} <br> Upper-case: ${userInput.toUpperCase()} <br><br>`);

//Q11
let userInput_11=prompt("Enter any String to convert in Title-case","asd asds asdds asdad");
function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
  document.write(`User input: ${userInput_11} <br> Title-case: ${toTitleCase(userInput_11)} <br><br>`);

  //Q12
  let num=35.36;
  let numToString=num.toString().replace(".","");
  document.write(`Number: ${num}  <br> Result: ${numToString}<br><br>`);

  //Q13
  let userName=prompt("Enter username","Hamza@");

  for (let i = 0; i < userName.length; i++) {
    if (userName[i]==='@' || userName[i] === '!' || userName[i] === ',' || userName[i] === '.') {
        alert("Enter a valid username");
    }
  }

  //Q14
  let bakeryItems_14=["cake", "apple pie", "cookie", "chips", "patties"];
  let userInput_14=prompt("Enter the item you want to order from bakery","CoOkIe").toLowerCase();
  let checkItem_14=false;
  for (let i = 0; i < bakeryItems_14.length; i++) {
          if (userInput_14 === bakeryItems_14[i]) {
            checkItem_14=true;
            document.write(`${userInput_14} is available at index ${i} in our bakery<br><br>`);
          }
  }
  if (checkItem_14 === false) {
    document.write(`We are sorry the ${userInput_14} is not available in our bakery<br><br>`);
  }

  // Q15
  let password=prompt(`Enter a password: (should contain numbers and alphabets,should not start with a number, password length must be greater or equal to 6).`,"1Hamza23");
  let isValid=false;
  if ((password[0]>='0' && password[0] <='9') || password.length < 6) {
    document.write(`Entered Password: ${password} <br> Password should start with an alphabet and password length should exceed 5 <br> Please Enter a valid password<br><br>`);
  }
    else{
    for (let i = 0; i < password.length; i++) {
      if (/^[a-zA-Z0-9]+$/.test(password)) {
        isValid=true;
      }
    }
  
  if(isValid){
    document.write(`Entered Password: ${password} <br> The entered password meets the above requirements.<br><br>`);
  } else{
    document.write(`Entered Password: ${password} <br> Password should only contain alphabets and numbers <br> Please Enter a valid password<br><br>`);
  }
    }

//  Q16
 let university="University Of Karachi";
 const convertedArray=university.split('');
let convertedArrayOutput="";
for (let i = 0; i < convertedArray.length; i++) {
    convertedArrayOutput+=`${convertedArray[i]} <br>`;
}
document.write(convertedArrayOutput + "<br><br>");

//17
let userInput_17=prompt("Enter an input to see its last character","Hamza");
let lastCharacterInput=userInput_17[userInput_17.length-1];
document.write(`User input: ${userInput_17} <br> Last character of input: ${lastCharacterInput} <br><br>`);

//Q18
let string_18="The quick brown fox jumps over the lazy dog.";
let findOccurence=(string_18.toLowerCase().match(/the/g) || []).length;
document.write(`Text: ${string_18} <br> There are ${findOccurence} occurence(s) of word 'the'`);














