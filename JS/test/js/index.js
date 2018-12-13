'use strict'
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  Если введено подходящее количество, то outline инпута становится зеленым, 
  если неправильное - красным. 
*/
const inputs = document.querySelector('.inputs');
const input = inputs.querySelectorAll('input');
for(let i=0;i<input.length;i++){
    input[i].addEventListener('blur',inputsLength);
}
function inputsLength(event){
  event.preventDefault();
  
  const target = event.target;
  const userValueLength = target.value.length;
  const inputLength = Number(target.getAttribute('data-length'));

  if(inputLength>=userValueLength){
    target.style.outline = 'solid 3px green';
  }else{
    target.style.outline = 'solid 3px red';
  }
}
