const numberElement = document.getElementById('number');
const incrementButton = document.getElementById('incrementButton');
const counter = document.getElementById('counter');

let number = 0;

numberElement.textContent = number;
counter.textContent = number;

incrementButton.addEventListener('click', () => {
   number++;

   numberElement.textContent = number;
   counter.textContent = number;
});