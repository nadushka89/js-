'use strict';
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const linkElement = document.getElementById('super_link');
console.log(linkElement);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const cardLinks = document.querySelectorAll(".card-link");
cardLinks.forEach((link) => {
  link.textContent = "ссылка";
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const cardBodyLink = document.querySelectorAll(".card-body .card-link");
console.log(cardBodyLink);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const dataElement = document.querySelector('[data-number = "50"]');
console.log(dataElement);

// 5. Выведите содержимое тега title в консоль.
console.log(document.title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// []()
const titleElement = document.getElementsByClassName('card-title')[0];
console.log(titleElement.parentNode);

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const paragrafEl = document.createElement('p');
paragrafEl.textContent = "Привет";
const cardElem = document.getElementsByClassName('card');
document.querySelector('.card').prepend(paragrafEl);

// 8. Удалите тег h6 на странице.
const h6Element = document.getElementsByTagName('h6')[0];
h6Element.remove();