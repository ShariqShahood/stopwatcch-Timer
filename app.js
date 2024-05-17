//******************************* */ for Stopwatch
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;
let flag = false;

function displayTime() {
    let displayHours = (hours < 10) ? "0" + hours : hours;
    let displayMinutes = (minutes < 10) ? "0" + minutes : minutes;
    let displaySeconds = (seconds < 10) ? "0" + seconds : seconds;
    document.getElementById("display").innerText = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function startStopwatch() {
    timer = setInterval(function() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        displayTime();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(timer);
}

function toggle() {
    if (flag) {
        stopStopwatch();
        flag = false;
        document.getElementById("toggleBtn").innerText = "Start";
    } else {
        startStopwatch();
        flag = true;
        document.getElementById("toggleBtn").innerText = "Stop";
    }
}

function reset() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayTime();
    flag = false;
    document.getElementById("toggleBtn").innerText = "Start";
}

// **********************for Timer

let duration; 
let intervalId;
let flag2 =false;

function displayTime2() {
    let hours2 = Math.floor(duration / 3600);
    let minutes2 = Math.floor((duration % 3600) / 60);
    let seconds2 = duration % 60;
    let displayHours = (hours2 < 10) ? "0" + hours2 : hours2;
    let displayMinutes = (minutes2 < 10) ? "0" + minutes2 : minutes2;
    let displaySeconds = (seconds2 < 10) ? "0" + seconds2 : seconds2;
    document.getElementById("display2").innerText = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function startstopTimer() {
    var inputElement = document.getElementById("textInput");
    var userInput = inputElement.value;
    duration = userInput;  


    intervalId = setInterval(function() {
        duration--;
        if (duration < 0) {
            stopTimer();
        }
        displayTime2();
    }, 1000);
}
function toggle2() {
    if (flag2) {
        stopTimer();
        flag2 = false;
        document.getElementById("toggleBtn2").innerText = "Start";
    } else {
        startstopTimer();
        flag2 = true;
        document.getElementById("toggleBtn2").innerText = "Stop";
    }
}
function stopTimer() {
    clearInterval(intervalId);
}
function resetTimer() {
    clearInterval(intervalId);
    duration = 0; 
    displayTime2();
    document.getElementById("toggleBtn2").innerText = "Start";
}
