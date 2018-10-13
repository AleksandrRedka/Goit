'use strict'
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let allLogins=logins
const isLoginValid = function(login) {
  let logLength=login.length
  return 4<=logLength && logLength<=16
  // код
}
const isLoginUnique = function(allLogins, login) {
  return allLogins.includes(login);
  // код;
}
const addLogin = function(login){
  if(isLoginValid(login)){
    if(!isLoginUnique(allLogins,login)){
      allLogins.push(login)
      return'Логин успешно добавлен!'
    }else{
      return'Такой логин уже используется!'
    }
  }else{
    return 'Ошибка! Логин должен быть от 4 до 16 символов'
  }
  // код
};
// Вызовы функции для проверки
console.log(addLogin('Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin('robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin('Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin('jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'