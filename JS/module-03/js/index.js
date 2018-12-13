"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  let loginLeng = login.length;
  return 4 <= loginLeng && loginLeng <= 16;
};


const isLoginUnique = function(logins, login) {
  return logins.includes(login);
};


const addLogin = function(login) {
  if (!isLoginValid(login)) {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
    return;
  } else {
    if (!isLoginUnique(logins, login)) {
      console.log("Такой логин уже используется!");
      return;
    } else {
      logins.push(login);
      console.log("Логин успешно добавлен!");
      return;
    }
  }
};


// Вызовы функции для проверки
addLogin("Ajax"); // 'Логин успешно добавлен!'
addLogin("robotGoogles"); // 'Такой логин уже используется!'
addLogin("Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin("jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
