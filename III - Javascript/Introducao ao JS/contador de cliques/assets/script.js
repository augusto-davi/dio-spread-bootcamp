const deduct = document.querySelector("[deduct]");
const add = document.querySelector("[add]");
let numberWrapper = document.querySelector(".pad__number");

let currentNumber = 0;

function decrement() {
  currentNumber -= 1;
  numberWrapper.innerHTML = currentNumber;
}

function increment() {
  currentNumber += 1;
  numberWrapper.innerHTML = currentNumber;
}

// Iniciar eventos
function changeValue() {
  deduct.addEventListener("click", decrement);
  add.addEventListener("click", increment);
}

window.addEventListener("load", changeValue);
