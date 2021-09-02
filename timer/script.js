var daysEl = document.getElementById("days");
var hoursEl = document.getElementById("hours");
var minsEl = document.getElementById("mins");
var secondsEl = document.getElementById("seconds");

var timer = "15 Aug 2022";

function countdown() {
  var timerDate = new Date(timer);
  var currentDate = new Date();

  var timerSeconds = (timerDate - currentDate) / 1000;

  var days = Math.floor(timerSeconds / 3600 / 24);
  var hours = Math.floor(timerSeconds / 3600) % 24;
  var mins = Math.floor(timerSeconds / 60) % 60;
  var seconds = Math.floor(timerSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
