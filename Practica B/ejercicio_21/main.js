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
    const frase = document.getElementById('frase').value;
    let f = frase.toUpperCase();
    let palabras = f.split(' ');

    var uletra = palabras[palabras.length - 1];
    var pletra = palabras[0];

    grabarFrase.innerHTML = frase + "<br>";
    grabarCantidad.innerHTML = "Cantidad: " + palabras.length;
    grabarPrimera.innerText = "Primera: " + pletra;
    grabarUltima.innerText = "Ultima: " + uletra;
    grabarInverso.innerText = "Inverso: " + palabras.slice().reverse().join(" ");
    grabarDeAaZ.innerText = "De A a Z: " + palabras.sort().join(" ");
    grabarDeZaA.innerText = "De Z a A: " + palabras.sort().reverse().join(" ");
  } catch (err) {
    swal('ERORR', "Ha surjido un error " + err.message, 'error');
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
