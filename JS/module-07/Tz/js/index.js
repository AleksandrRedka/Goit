"use strict";

/*
  Напишите скрипт для создания списка ul.
  
  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
*/
// // Создаем ul
// const ul = document.createElement("ul");
// document.body.appendChild(ul);
// ul.textContent = "Ul";
// // Coздаем цикл while,т.к. не знаем точное количество вводов
// while (true) {
//   let userItem= prompt('Enter item list');
//   // если условие отрицательное останавливам выполнение и выводим значение
//   if (!userItem) {
//     break;
//   }
//   // создаем лист
//   let el = document.createElement("li");
//   // прописываем контент 
//   el.textContent= `${userItem}`
//   // вставяем в ul
//   ul.appendChild(el);
// }

// console.log(ul);
