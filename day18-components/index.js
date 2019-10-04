let plusbtn = document.querySelector('#plus');
let minusbtn = document.querySelector('#minus');
let knob = document.querySelector('#knob');
let counter = document.querySelector('#counter');


// functions
const incrementCounter = () => {
  counter.textContent = '5';
  knob.style.width = "50%";
}
const reduceCounter = () => {
  counter.textContent = '3';
  knob.style.width = "30%";
}

// event listeners
document.addEventListener('DOMContentLoaded', () => {

plusbtn.addEventListener('click', incrementCounter);
minusbtn.addEventListener('click', reduceCounter);

});