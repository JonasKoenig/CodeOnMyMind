var clock = document.getElementById('clock');
var timer = document.getElementById('timer');

var start = new Date().getTime();
var elapsed = 0;
var timerOffset = 0;

var minutes, seconds, mm, ss = 0;


setInterval(function() {
  elapsed = (new Date().getTime() - start)/1000;

  seconds = Math.floor(elapsed)%60;
  minutes = Math.floor(elapsed/60)%60;

  ss = seconds<10 ? "0"+seconds : seconds;
  mm = minutes<10 ? "0"+minutes : minutes;
  clock.innerHTML = mm + ":" + ss;

  seconds = Math.floor(elapsed - timerOffset)%60;
  minutes = Math.floor(elapsed/60 - timerOffset/60)%60;

  ss = seconds<10 ? "0"+seconds : seconds;
  mm = minutes<10 ? "0"+minutes : minutes;
  timer.innerHTML = mm + ":" + ss;

}, 200);

function resetTimer() {
  timerOffset = elapsed;
};
