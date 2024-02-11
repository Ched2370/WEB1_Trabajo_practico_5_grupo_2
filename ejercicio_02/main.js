var boton = document.getElementById("boton");
boton.addEventListener("click", rectangulo);

const r = document.getElementById("rectangulo");

function rectangulo() {
  try {
    var b = document.getElementById("base").value;
    var a = document.getElementById("altura").value;

    if (isNaN(b) || isNaN(a)) throw new Error(' Tipo de dato incorrecto');

    let rectangulo = ''; // Variable para almacenar el rectángulo completo

    for (let i = 0; i < a; i++) {
      let linea = '';
      for (let j = 0; j < b; j++) {
        if (i === 0 || i === a - 1 || j === 0 || j === b - 1) {
          linea += "*";
        } else {
          linea += " ";
        }
        console.log(linea);
      }
      console.log(linea);
      rectangulo += linea + '\n';
    }
    
    r.innerHTML = '<pre>' + rectangulo + '</pre>'; // La etiqueta <pre> sirve para que no sepierdan los espacios en blanco en html

  } catch (err) {
    alert("Ha ocurrido un error: " + err.message);
  }
}


