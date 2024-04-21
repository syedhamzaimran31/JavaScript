let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

stopBtn.disabled = true;
resetBtn.disabled = true;

let HOUR = document.getElementById("Hr");
let MIN = document.getElementById("Min");
let SEC = document.getElementById("Sec");
let MILSEC = document.getElementById("MilSec");

let hour = 0;
let min = 0;
let sec = 0;
let milSec = 0;

let timerFlag = true;
let pauseFlag = true;

let timeOut;

startWatch();
pauseWatch();
resetWatch();

function startWatch() {
  startBtn.addEventListener("click", function () {
   
    timerFlag = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
    stopWatch();
  });
}

function pauseWatch() {
  stopBtn.addEventListener("click", function () {
    if (pauseFlag) {
      stopBtn.innerText = "RESUME";
      timerFlag = false;
      pauseFlag = false;
    } else {
      stopBtn.innerText = "PAUSE";
      timerFlag = true;
      pauseFlag = true;
    }
  });
}

function resetWatch() {
  resetBtn.addEventListener("click", function () {
    startBtn.disabled = false;
    resetBtn.disabled = true;
    stopBtn.disabled = true;
  
    timerFlag = false;
    hour = 0;
    min = 0;
    sec = 0;
    milSec = 0;
  
    HOUR.innerHTML = "00";
    MIN.innerHTML = "00";
    SEC.innerHTML = "00";
    MILSEC.innerHTML = "00";
  
    clearTimeout(timeOut);
  });
}

//FlagVariable , boolean

function stopWatch() {
  if (timerFlag) {
    milSec++;
  }
  if (milSec == 100) {
    sec++;
    milSec = 0;
  }
  if (sec == 60) {
    min++;
    sec = 0;
  }
  if (min == 60) {
    hour++;
    min = 0;
    sec = 0;
  }

  let hourString = hour;
  let minString = min;
  let secString = sec;
  let milSecStr = milSec;

  if (hour < 10) {
    hourString = "0" + hourString;
  }

  if (min < 10) {
    minString = "0" + minString;
  }

  if (sec < 10) {
    secString = "0" + secString;
  }

  if (milSec < 10) {
    milSecStr = "0" + milSecStr;
  }

  HOUR.innerHTML = hourString;
  MIN.innerHTML = minString;
  SEC.innerHTML = secString;
  MILSEC.innerHTML = milSecStr;
  timeOut = setTimeout(stopWatch,0.5);
}
