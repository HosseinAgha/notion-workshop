"use strict"

var elems = []

for(var i = 0; i < 3; i++) {
  elems.push(document.createElement("div"));
}

var el = document.getElementById("app");

for (var i = 0; i < 3; i++) {
  el.appendChild(elems[i]);
}

for (var i = 0; i < 3; i++) {
  elems[i].className = "ball";
}

for (let i = 0; i < 3; i++) {
  let clicked = function(e) {
    let bgc = elems[i].style.backgroundColor;
    if(bgc) {
      elems[i].style.backgroundColor = "";
    } else {
      elems[i].style.backgroundColor = "red";
    }
  }
  elems[i].addEventListener('click', clicked);
}