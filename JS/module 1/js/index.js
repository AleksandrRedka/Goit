'use strict';

const userLogin=prompt('Введите свой логин');
const adminLogin = 'admin';
const adminPassword = String(1111);
const canseled = ' Отменено пользователем!';
const denied='Доступ запрещен';
const welsome='Добро пожаловать';

if (userLogin===null ){
    alert (canseled);
} else if (userLogin !== adminLogin){
    alert (denied);
}else if ( userLogin === adminLogin){
    const userPassword = prompt('Введите пароль!');
    console.log ('логин', userLogin);
if (userPassword === null){
    alert (canseled);
}else if (userPassword !== adminPassword){
    alert (denied);
}else if (userPassword === adminPassword){
    alert (welsome);
}
}
