
const btnY = document.getElementById('btnY');
btnY.addEventListener('click', agregarAño);
const textAño = document.getElementById('año');
const resAño = document.getElementById('resAño');

function agregarAño() {
  var year = textAño.value;
  resAño.innerText = year;

}

function validarInput(input) { // bloque el inrgeso de datos por teclado 
    if (input.value < input.min) {
      input.value = input.min;
    } else if (input.value > input.max) {
      input.value = input.max;
    }
  }
  