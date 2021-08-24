//Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить,
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputEl = document.querySelector("#controls>input")
const buttonRenderEl = document.querySelector('[data-action="render"]')
const buttonDestroyEl = document.querySelector('[data-action="destroy"]')
const divEl = document.querySelector('#boxes')

buttonRenderEl.addEventListener('click', createBoxes)
buttonDestroyEl.addEventListener('click', destroyBoxes)

function getRandom() {
  let r = Math.round(Math.random() * (255 - 0) + 0);
  let g = Math.round(Math.random() * (255 - 0) + 0);
  let b = Math.round(Math.random() * (255 - 0) + 0);
  return `rgb(${r},${g},${b})`;
}

function createBoxes(amount) {
    destroyBoxes();
    amount = inputEl.value;
    // console.log(amount);
    
    for (let i = 0; i < amount; i += 1){
        const newDivElem = document.createElement('div');
        newDivElem.style.height = `${30 + i * 10}px`;
        newDivElem.style.width = `${30 + i * 10}px`;
        newDivElem.style.backgroundColor = getRandom()
        divEl.appendChild(newDivElem);
    }
    inputEl.value = null;
    // console.log(divEl);
}

function destroyBoxes() {
    while (divEl.firstChild)
    divEl.removeChild(divEl.firstChild);
}


