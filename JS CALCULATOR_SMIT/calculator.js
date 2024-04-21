const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "/", "*", "+", "-", "="];
let output = "";

function calculateValue(btnValue) {
  if (btnValue === "=" && btnValue !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (btnValue === "" && specialChars.includes(btnValue)) {
      return;
    }
    output = output + btnValue;
  }
  display.value = output;
}
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    return calculateValue(e.target.dataset.value);
  });
});
