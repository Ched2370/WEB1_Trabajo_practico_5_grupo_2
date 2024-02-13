const btn = document.getElementById("btn");
const texto = document.getElementById("resultado");
btn.addEventListener("click", listaRandom);

function listaRandom() {
  try {
    for (let i = 0; i < 50; i++) {
      element = Math.floor(Math.random() * 6) + 1; // Math.floor() redondea el numero
      console.log(element);
      if (i / 10 == 0 && i !== 0) {
        resultado.innerHTML +=  i + 1 + '). ' + element + ' - ' + '<br>';
      } else {
        resultado.innerHTML += i + 1 + '). ' + element + ' - ';
      }
    }
  } catch (err) {
    alert("Ha surjido un error " + err.message);
  }
  resultado.innerHTML += '<br><br>';
}
