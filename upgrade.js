var counter = 0;
var mainNumHTML = document.getElementById("counter").innerHTML;

function increase() {
    counter = counter + 1;
    mainNumHTML.innerHTML = counter;
}