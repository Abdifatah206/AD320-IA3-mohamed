window.onload =function() {
document.getElementById("myBtn").addEventListener("click", function() {
  alert("Hello World!");
});



document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById("demo").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("demo").style.color = "red";
}

function mouseOut() {
  document.getElementById("demo").style.color = "black";
}



document.getElementById("demo1").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo1").innerHTML = Date();
}
document.getElementById("demo2").addEventListener("mousedown", mouseDown);
document.getElementById("demo2").addEventListener("mouseup", mouseUp);

function mouseDown() {
  document.getElementById("demo2").innerHTML = "The mouse button is held down.";
}

function mouseUp() {
  document.getElementById("demo2").innerHTML = "You released the mouse button.";
}
document.getElementById("myDIV").addEventListener("mousemove", myFunction);

function myFunction() {
  document.getElementById("demo3").innerHTML = Math.random();
}


}


