//                      JS Assignment Chapter 49 - 52

// 1)

let userName = document.querySelector("#userEmail").value;
let userPassword = document.querySelector("#userPassword").value;
console.log(userPassword);
let submitBtn = document.querySelector("#submitBtn");
let displayUserInfo = document.querySelector("#display");

submitBtn.addEventListener("click", function () {
  displayUserInfo.innerHTML = `Hey : ${userName} <br>Your password is : ${userPassword}`;
  console.log(userName + "" + userPassword);
  event.preventDefault();
});

// 2)
let dots = document.querySelector("#dots");
let moreText = document.querySelector("#more");
let btnText = document.querySelector("#readmoreBtn");

btnText.addEventListener("click", function () {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
});

// 3)
let getRowId1 = document.getElementById("row1");
let getRowId2 = document.getElementById("row2");
let getRowId3 = document.getElementById("row3");
let getRowId4 = document.getElementById("row4");

let getName = document.getElementsByClassName("personName1");
let getClass = document.getElementsByClassName("personClass1");

let getName1 = document.getElementsByClassName("personName2");
let getClass1 = document.getElementsByClassName("personClass2");

let getName2 = document.getElementsByClassName("personName3");
let getClass2 = document.getElementsByClassName("personClass3");

let getName3 = document.getElementsByClassName("personName4");
let getClass3 = document.getElementsByClassName("personClass4");

let getEditBtn1 = document.getElementsByClassName("editBtn1");
let getEditBtn2 = document.getElementsByClassName("editBtn2");
let getEditBtn3 = document.getElementsByClassName("editBtn3");
let getEditBtn4 = document.getElementsByClassName("editBtn4");

getEditBtn1[0].addEventListener("click", function () {
  let newName = prompt("Enter new name :", "Hamza..");
  let newClass = prompt("Enter new class : ", "11");
  getName[0].innerText = newName;
  getClass[0].innerText = newClass;
});

getEditBtn2[0].addEventListener("click", function () {
  let newName = prompt("Enter new name :", "Hamza..");
  let newClass = prompt("Enter new class : ", "11");
  getName1[0].innerText = newName;
  getClass1[0].innerText = newClass;
});

getEditBtn3[0].addEventListener("click", function () {
  let newName = prompt("Enter new name :", "Hamza..");
  let newClass = prompt("Enter new class : ", "11");
  getName2[0].innerText = newName;
  getClass2[0].innerText = newClass;
});

getEditBtn4[0].addEventListener("click", function () {
  let newName = prompt("Enter new name :", "Hamza..");
  let newClass = prompt("Enter new class : ", "11");
  getName3[0].innerText = newName;
  getClass3[0].innerText = newClass;
});
function removeRow1() {
  getRowId1.remove();
}

function removeRow2() {
  getRowId2.remove();
}
function removeRow3() {
  getRowId3.remove();
}
function removeRow4() {
  getRowId4.remove();
}
