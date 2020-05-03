// Timer
// https://youtu.be/MLtAMg9_Svw

var timeleft = 10;

var startTime = 0;
var currentTime = 0;

function convertSeconds(s) {
  // WRITE CODE HERE
}

var ding;

function preload() {
  ding = loadSound('ding.mp3');
}

function setup() {
  noCanvas();
  startTime = millis();

  var params = getURLParams();
  console.log(params);
  if (params.minute) {
    var min = params.minute;
    timeleft = min * 60;
  }

  var timer = select('#timer');
  timer.html(convertSeconds(timeleft - currentTime));

  var interval = setInterval(timeIt, 1000);

  function timeIt() {
    // WRITE CODE HERE
  }
}










// Credit to Daniel Shiffman
