const btnIniciar = document.getElementById('btnIniciar');
btnIniciar.addEventListener('click', iniciar);

const btnLimpiar = document.getElementById('btnLimpiar');
btnLimpiar.addEventListener('click', limpiar);

const grabarFrase = document.getElementById("frase");
const grabarCantidad = document.getElementById("cantidad");
const grabarPrimera = document.getElementById("primera");
const grabarUltima = document.getElementById("ultima");
const grabarInverso = document.getElementById("inverso");
const grabarDeAaZ = document.getElementById("DeAaZ");
const grabarDeZaA = document.getElementById("DeZaA");

function iniciar() {
  try {
    let frase = prompt("Ingrese su frase");
    let f = frase.toUpperCase();
    let palabras = f.split(' ');

    var uletra = palabras[palabras.length - 1];
    var pletra = palabras[0];
    var inverso = '';
    var oletra = '';

    /*for (let letra of palabras) {
      var pletra = letra[0];
      break;
    }

    for (let letra of palabras) {
      var uletra = letra[letra.length - 1];
    }*/

    for (var invertir of palabras) {
      inverso = invertir.toUpperCase();
    }

    for (let letra of palabras) { // elimino los espacios
      if(letra !== ' ') {
        oletra += letra.toUpperCase();
      }
    }

    grabarFrase.innerHTML = frase + "<br>";
    grabarCantidad.innerHTML = "Cantidad: " + palabras.length;
    grabarPrimera.innerText = "Primera: " + pletra;
    grabarUltima.innerText = "Ultima: " + uletra;
    grabarInverso.innerText = "Inverso: " + palabras.slice().reverse().join(" ");
    grabarDeAaZ.innerText = "De A a Z: " + palabras.sort().join(" ");
    grabarDeZaA.innerText = "De Z a A: " + palabras.sort().reverse().join(" ");
  } catch (err) {
    alert("Ha surjido un error " + err.message);
  }
}

function limpiar() {
  grabarFrase.innerHTML = "";
  grabarFrase.innerHTML = "";
  grabarCantidad.innerHTML = "";
  grabarPrimera.innerText = "";
  grabarUltima.innerText = "";
  grabarInverso.innerText = "";
  grabarDeAaZ.innerText = "";
  grabarDeZaA.innerText = "";
}
