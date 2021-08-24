// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.



const inputEl = document.querySelector('#validation-input')
// console.log(inputEl);

const dataLengthEl = Number(inputEl.dataset.length)
// console.log(dataLengthEl);


function onInputBlur(event) {
    
    inputEl.classList.remove('valid', 'invalid')
    if (inputEl.value.length === dataLengthEl) {
        inputEl.classList.add('valid')
    } else {
        inputEl.classList.add('invalid')
    }

}

inputEl.addEventListener('blur', onInputBlur)