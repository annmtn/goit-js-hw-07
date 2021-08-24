const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива 
// ingredients создаст отдельный li, после чего вставит 
// все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().


const ingredientsEl = document.querySelector('#ingredients')


const elements = ingredients.map((ingredient) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  return itemEl
})
// console.log(elements);

ingredientsEl.append(...elements)
console.log(ingredientsEl);