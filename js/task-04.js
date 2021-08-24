// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterValueEl = document.querySelector('#value');
const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');


btnDecrementEl.addEventListener('click', 
    function decrement() {
        counterValueEl.textContent -= 1
    }
)

btnIncrementEl.addEventListener('click', 
    function increment() {
        counterValueEl.textContent = Number(counterValueEl.textContent) + 1
    }
)