"use strict";
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let btn  = document.querySelector('.win');
let btnWidth = btn.clientWidth;
let btnHeight = btn.clientHeight;
console.log(btnWidth, btnHeight)

// btn.style.top = Math.floor(Math.random()*(windowHeight - btnHeight))+'px';
// btn.style.left = Math.floor(Math.random()*(windowWidth - btnWidth))+'px';

let btns = document.querySelectorAll('.btn');

function moveBtn(){
    this.style.top = Math.floor(Math.random() * (windowHeight - btnHeight))+'px';
    this.style.left = Math.floor(Math.random() * (windowWidth - btnWidth))+'px';
}

btns.forEach(el => el.addEventListener('mouseenter',moveBtn));