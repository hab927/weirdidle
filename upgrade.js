var mainNumHTML = document.getElementById("counter");
var upgradeButton = document.getElementById("increase");

// game variables
var count = 0;
var countPerSecond = 1;
var tickspeed = 1000;
var tick;

var $tspeed = document.querySelector('#tspeed');

function increase() {
    count = count + 1;
    mainNumHTML.innerHTML = count;
}

function decreaseInterval() {
    clearInterval(tick);
    tickspeed -= 1;
    $tspeed.innerHTML -= 1;
    tick = setInterval(automatic, tickspeed);
}

function automatic() {
    count++;
    mainNumHTML.innerHTML = count;
}