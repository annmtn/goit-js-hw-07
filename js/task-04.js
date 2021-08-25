// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const valueEl = document.querySelector("#value");
const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');

// btnDecrementEl.addEventListener("click", function decrement() {
//   valueEl.textContent -= 1;
// });

// btnIncrementEl.addEventListener("click", function increment() {
//   valueEl.textContent = Number(valueEl.textContent) + 1;
// });

let counterValue = 0;

btnDecrementEl.addEventListener("click", decrement);
btnIncrementEl.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
