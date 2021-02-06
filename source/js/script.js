// Это пример файла со скриптами. Можете писать здесь код, который будет на странице.
const form = document.querySelector('.contacts__tel-button');
const container = document.querySelector('.popup-container');
const btn = document.querySelector('.light-button.send-order');

form.onclick = event => {
  console.log(container);
  event.preventDefault();
  container.style.display = 'flex';
};

btn.onclick = event => {
  console.log(btn);
  container.style.display = 'none';
};
