"use strict"

let text = document.querySelector('.input');
let form = document.querySelector('.box');
let container = document.querySelector('#container');
let get = document.querySelector('#get');
let post = document.querySelector('#post');
let del = document.querySelector('#delete')
function readValue(){
    event.preventDefault();
    let value = text.value;
    console.log(value);
    text.value = ''; 

    sendRequest(value);
}

function paintGallery(arr){
    let result=arr.reduce((acc,el)=> acc + `<div class="one"><p>Photographer is ${el.user}</p><img src=${el.webformatURL}></div>`,'');

    container.innerHTML+=result;
}

function sendRequest(value){
    let url = `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${value}&per_page=12`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>paintGallery(data.hits))
}

function getRequest(){
    fetch('http://localhost:3001/tasks')
        .then(res=>res.json())
        .then(data=>console.log(data))
}

function postRequest(){
    fetch('http://localhost:3001/tasks',{
        method:'post',
        body: JSON.stringify({text:'Борщ'}),
        headers:{
            'Content-Type': 'application/json'
        }
    })

}
get.addEventListener('click', getRequest);
post.addEventListener('click', postRequest);

form.addEventListener('submit',readValue);

window.addEventListener('DOMContentLoaded', readValue);