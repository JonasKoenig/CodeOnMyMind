var clock = document.getElementById('clock');
var timer = document.getElementById('timer');

var start = new Date().getTime();
var elapsed = 0;
var timerOffset = 0;

setInterval(function() {
  elapsed = (new Date().getTime() - start)/1000;

  seconds = Math.floor(elapsed)%60;
  ss = seconds<10 ? "0"+seconds : seconds;
  minutes = Math.floor(elapsed/60)%60;
  mm = minutes<10 ? "0"+minutes : minutes;
  clock.innerHTML = mm + ":" + ss;

  seconds -= Math.floor(timerOffset)%60;
  ss = seconds<10 ? "0"+seconds : seconds;
  minutes -= Math.floor(timerOffset/60)%60;
  mm = minutes<10 ? "0"+minutes : minutes;
  timer.innerHTML = mm + ":" + ss;

}, 200);

function resetTimer() {
  timerOffset = elapsed;
};
