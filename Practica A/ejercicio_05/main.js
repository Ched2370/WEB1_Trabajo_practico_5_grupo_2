const r = document.getElementById('respuesta');
const click = document.getElementById("btn");
click.addEventListener('click', jugar);

num = Math.floor(Math.random() * 100 ** 3 + 1);
console.log(num);

function jugar() {
  console.log(num);
  try {
    r.innerText = '';
    var contador = 0;
    let a;
    do {
      if (contador === 0) {
        a = prompt("Adivina el numero entre 1 y 1000000");
      } else {
        if (a > num) {
          a = prompt("El numero es mas pequeño, intentalo de nuevo");
        }
        if (a < num) {
          a = prompt("El numero es mas grande, intentalo de nuevo");
        }
      }
      contador++;
      console.log(contador);
    } while (a != num);
    a = alert("FELICIDADES!!!, HAS DESCUBIERTO EL NUMERO");
  } catch (err) {
    alert("a surjido un error " + err.message);
  }finally {
    console.log(num);
    r.innerHTML = 'FELICITACIONES!!!' + '<br>' +
    'el numero era ' + num + '<br>' +
    'intentos: ' + contador;
    num = Math.floor(Math.random() * 100 ** 3 + 1);
  }
}
