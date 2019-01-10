var display = document.getElementById('time');

var start = new Date().getTime();
var elapsed = 0;

setInterval(function() {
  elapsed = (new Date().getTime() - start)/1000;

  seconds = Math.floor(elapsed)%60;
  ss = seconds<10 ? "0"+seconds : seconds;

  minutes = Math.floor(elapsed/60)%60;
  mm = minutes<10 ? "0"+minutes : minutes;

  display.innerHTML = mm + ":" + ss;
}, 200);
