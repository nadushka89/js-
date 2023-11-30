"use strict";

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

let inputEl = document.querySelector("input[id = 'from']");

let spanEl = document.querySelector("span");
inputEl.addEventListener('input', (e)=>{
    spanEl.innerHTML = e.target.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

let btn = document.querySelector('.messageBtn');
let msg = document.querySelector('.message');
btn.addEventListener('click', (e)=>{
    msg.classList.add('animate_animated', 'animate_fadeInLeftBig');
    msg.style.visibility = 'visible';
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const formEl = document.querySelector("form");
const inputFields = formEl.querySelectorAll(".form-control");

inputFields.forEach(function (input) {
    input.addEventListener("input", function () {
        if (input.value.trim() !== "") {
            input.classList.remove("error");
        }
    });
});
formEl.addEventListener("submit", function (e) {
    inputFields.forEach(function (input) {
        if (input.value.trim() === "") {
            e.preventDefault();
            if (!input.classList.contains("error")) {
                input.classList.add("error");
            }
        } else {
            input.classList.remove("error");
        }
    });
});
