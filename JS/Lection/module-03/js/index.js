const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let allLogins=logins
const isLoginValid = function(login) {
  return 4<=login,length<=16
  // код
};
const isLoginUnique = function(allLogins, login) {
  return allLogins.includes(login)
  // код;
};

const addLogin = function(login) {
  if(isLoginValid=true){
    if(isLoginUnique!=true){
      push.logins
      alert('Логин успешно добавлен!')
    }else{
      alert('Такой логин уже используется!')
    }
  }else{
    alert('Ошибка! Логин должен быть от 4 до 16 символов')
  }
  // код
};

// Вызовы функции для проверки
console.log(addLogin('Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin('robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin('Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin('jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'