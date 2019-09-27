/* eslint-disable */

const username = prompt('Welcome, please enter your username');
const users = ['Marta', 'Sylva', 'Tereza'];
if (username !== users) {
    alert('Access Denied!')
} else {
    alert('Access Granted!')
}















/*
//simple event listenter practise
const box1 = document.querySelector('#box1');
const changeToRed = () => {
  box1.style.backgroundColor = 'red';
};


const box2 = document.querySelector('#box2');
const textIncrease = () => {
  box2.style.fontSize = 'x-large';
};


const myBtn = document.querySelector('#my-btn');
const awesomeAlert = () => {
  alert('Javascript is hell but awesome!');
};


const myBtn2 = document.querySelector('#my-btn2');
const openPrompt = () => {
    const person = prompt('Please enter your name:')
  if (person === 'Paul') {
    alert('Hey ' + person + '! I thought it would be you!')
  } else {
    alert('I don\'t know you...')
  }
};


const box3 = document.querySelector('#box3');
const changeStuff = () => {
    box3.style.fontSize = 'x-small';
    box3.style.backgroundColor = 'yellow';
    box3.style.color = 'blue';
};


const box4 = document.querySelector('#box4');
const vanishAndLaugh = () => {
    box4.style.display = 'none';
    alert('Wanna see a box disappear?');
}

document.addEventListener('DOMContentLoaded', () => {
    box1.addEventListener('click', changeToRed);
    box2.addEventListener('mouseover', textIncrease);
    myBtn.addEventListener('dblclick', awesomeAlert);
    myBtn2.addEventListener('click', openPrompt);
    box3.addEventListener('click', changeStuff);
    box4.addEventListener('dblclick', vanishAndLaugh);
}); */



/* const side = Math.floor((Math.random() * 6) + 1);

const changeImg = () => { // declares function
  document.querySelector('#dice').src = `img/side${side}.png`; // get dice element and change image (action)
};

const roll = document.querySelector('#dice'); // get dice element
roll.addEventListener('click', changeImg); // when it's clicked


/* const sides = [1, 2, 3, 4, 5, 6];

const changeImg = () => {
  document.querySelector('#dice').src = 'img/side2.png';
};

const roll = document.querySelector('#dice');
roll.addEventListener('click', changeImg); */

/* '#dice', '#dice2', '#dice3', '#dice4', '#dice5', '#dice6' */
