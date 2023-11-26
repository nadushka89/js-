// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener("DOMContentLoaded", () =>
    console.log("все теги прогрузились")
);

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.onload = function() {
    console.log('страница загрузилась');
};
// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

document.body.addEventListener("click", (e) => {
    const target = e.target;
    const superEl = target.classList.contains("super_element");
    const postEl = superEl ? "присутствует" : "отсутствует";
  
    console.log(
      `Класс "super_element" ${postEl} в элементе "${target.tagName.toLowerCase()}"`
    );
  });
// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const textArea = document.querySelector('textarea');
textArea.addEventListener("mouseover", function(e){
    console.log('Вы навели на textarea.');
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
const ul = document.querySelector('ul');
ul.addEventListener("click", function(e){
    const target = e.target;
    if (target.tagName === "BUTTON") {
        console.log(target.textContent);
    }
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
// Потому что обработка событий происходит от элемента (кнопки) вверх по иерархии. Сначало срабатывает обработчик для кнопки,потом для ul, затем body.
// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
const liEl = document.querySelectorAll('li');
liEl.forEach((li,i) =>{
    if (i%2){
        li.style.backgroundColor = 'blue';
    }
})