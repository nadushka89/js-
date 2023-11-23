'use strict';
/* []()
[]()
1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.*/
let dropdownItem = document.querySelectorAll('.dropdown-item');
dropdownItem.forEach((element) => {
  element.classList.add('super-dropdown');
});
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
let btn = document.querySelector('.btn');
if (btn.classList.contains('btn-secondary')) {
  btn.classList.remove('btn-secondary');
} else {
  btn.classList.add('btn-secondary');
}
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

let menu = document.querySelector('.menu');
menu.classList.remove('dropdown-menu');
;
// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const dropdownElement = document.querySelector('div.dropdown');
dropdownElement.insertAdjacentHTML('afterend', `<a href="#">link</a>`);

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

let dropdownButtonElement = document.querySelector('#dropdownMenuButton');
dropdownButtonElement.setAttribute('id', 'superDropdown');

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const ariaLabelElement = document.querySelector('[aria-labelledby = "dropdownMenuButton"]');
ariaLabelElement.dataset.dd = 3;

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

let typeElement = document.querySelector('.dropdown-toggle');
typeElement.removeAttribute('type');
