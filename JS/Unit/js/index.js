'use strict'
// const min = 100;
// let userInput;
// let num;
// let inRange= false;
// do {
//   userInput = prompt('Введите число больше {min}');
//   num = Number(userInput)
//   inRange= num >= min
// }while (userInput!==null && !inRange)
/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/
const scientist = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
// let sum=scientist.
// reduce(function(acc,el){
//   return acc+(el.passed-el.year)
// },0)
// console.log(sum);


// let result= scientist.sort(function(a,b){
//   return a.first>b.first ? 1 : -1
// });
// console.log(result)

// let result = scientist.sort(function(a,b){
//     return (a.passed - a.years) - (b.passed -b.years);
// });
// let result = scientist.sort((a,b) => ((a.passed-years) -(b.passed-b.year)))
// console.log(result)

// let result = scientist
// .filter(function(el){
//   return el.year<1400 || el.year>=1700
// })
// console.log(result)

// let result  = scientist
//   .filter(function(el){
//     return el.find==='Albert' && el.last==='Einstein'
//   })
//   console.log(result);

// let result =scientist
//   .sort(function(a,b){
//     return b.year-a.year
//   })
// console.log(result[0])

let result  = scientist
  .filter(function(el){
    return el.first==='Albert' && el.last==='Einstein'
  })
  console.log(result.year)