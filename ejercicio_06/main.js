const btn = document.getElementById("btn");
btn.addEventListener("click", iniciar);

const grabarFrase = document.getElementById("frase");
const grabarCantidad = document.getElementById("cantidad");
const grabarPrimera = document.getElementById("primera");
const grabarUltima = document.getElementById("ultima");
const grabarInverso = document.getElementById("inverso");
const grabarDeAaZ = document.getElementById("DeAaZ");
const grabarDeZaA = document.getElementById("DeZaA");

function iniciar() {
  try {
    limpiar();
    let frase = prompt("Ingrese su frase");
    let palabras = frase.split(" ");
    text = "";
    uletra = palabras[palabras.length - 1];
    inverso = "";
    text = "";

    for (let letra of palabras) {
      pletra = letra[0];
      break;
    }
    for (let letra of palabras) {
      uletra = letra[letra.length - 1];
    }

    grabarFrase.innerHTML = frase + "<br>";
    grabarCantidad.innerHTML = "Cantidad: " + palabras.length;
    grabarPrimera.innerText = "Primera letra: " + pletra;
    grabarUltima.innerText = "Ultima letra: " + uletra;
    grabarInverso.innerText =
      "Inverso: " + palabras.slice().sort().reverse().join(" ");
    grabarDeAaZ.innerText = "De A a Z: " + palabras.slice().sort().join(" ");
    grabarDeZaA.innerText = "De Z a A: ";
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
