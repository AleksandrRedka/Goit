'use strict';

let userInput;
let numbers = [];
let total = 0;
const canseled = 'Было введено не число, попробуйте еще раз';

do{
    userInput= Number(prompt('Введите число для подсчета суммы!'));
    numbers.push(userInput);
}while (userInput!==null && Number(userInput))
console.log(numbers);
for(let sum of numbers){
    total+=sum
};

console.log(total);
alert(`Общая сумма ${total}`);
