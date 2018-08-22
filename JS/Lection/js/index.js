'use strict'
// let hours = 7;
// let minutes = 3;
// let seconds = 42;
// if (String(hours).length === 1){
//     hours='0'+hours;
// }
// if (String(minutes).length === 1){
//     minutes='0'+minutes;
// }
// if  (String(seconds).length ===1){
//     seconds='0'+seconds;
// }
// const time = `${hours}:${minutes}:${seconds}`;
// console.log('Time is: ', time);
// console.groupEnd();
const catalog = prompt(' Введите число от 1 до 5!');
const arrayHostels = ["Каталог хостелов",
"Каталог бюджетных отелей",
"Каталог отелей ***",
"Каталог отелей ****",
"Каталог лучших отелей"];
if (catalog===null){
    alert ('Оставайтесь на улице');
} else {
    const catalogVerify = parseInt(catalog);
    switch (Boolean(catalog)){
        case (typeof(catalogVerify) === 'number') :
            if (0 < Math.abs(catalogVerify) < 6){
               alert (arrayHostels[catalogVerify - 1]);
            } else {
                alert ('Неверный ввод, возможны варианты от 1 до 5!')
            }
        break;
        default:
            alert ('Неверный ввод, возможны варианты от 1 до 5!')
    }
}