// 'use strict';

// let userInput;
// let numbers = [];
// let total = 0;
// const canseled = 'Было введено не число, попробуйте еще раз';

// do{
//     userInput= Number(prompt('Введите число для подсчета суммы!'));
//     numbers.push(userInput);
// }while (userInput!==null && Number(userInput))
// console.log(numbers);

// for(let sum of numbers){
//     total+=sum
// };

// console.log(total);
// alert(`Общая сумма ${total}`);

// Задание с повышенной сложностью!

// Напишите скрипт имитирующий авторизацию пользователя.

// Есть массив паролей зарегистрированных пользователей passwords.

// При посещении страницы, необходимо попросить пользователя ввести свой пароль,
// после чего проверить содержит ли массив passwords пароль введенный пользователем.

// Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attempts.
// Подсказка: используйте цикл do...while.
// Если был введен пароль который есть в массиве passwords, вывести alert
// с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
// Если был введен не существующий пароль, отнять от лимита попыток единицу,
// вывести alert с текстом "Неверный пароль, у вас осталось n попыток",
// где n это оставшийся лимит.

// После того как пользователь закрыл alert, запросить пароль снова.
// Продолжать запрашивать пароль до тех пор, пока пользователь не введет
// существующий пароль, не кончатся попытки или пока пользователь
// не нажмет Cancel в prompt.
// Если закончились попытки, вывести alert с текстом "У вас закончились попытки, аккаунт заблокирован!"

// Если пользователь нажмет Cancel, прекратить выполнение цикла.
// */
let userPassword;
const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attempts = 3;
do {
  let userPassword = prompt("Введите свой пароль");
  attempts -= 1;
  if (userPassword === null) {
    break;
  }
  {
    if (passwords.includes(userPassword)) {
      alert("Добро пожаловать!");
      break;
    } else {
      if (attempts <= 0) {
        alert("У вас закончились попытки, аккаунт заблокирован!");
        break;
      }
      alert(`"Неверный пароль, у вас осталось ${attempts} попыток"`);
    }
  }
} while (userPassword === null);

console.log(userPassword);
