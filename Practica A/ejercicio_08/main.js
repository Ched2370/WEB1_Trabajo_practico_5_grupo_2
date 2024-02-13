const iniciar = document.getElementById("iniciar");
iniciar.addEventListener("click", recibirDatos);

const resumen = document.getElementById("resumen");
resumen.addEventListener("click", resumenDatos);

var datos = [];

const promedio = document.getElementById("promedio");
const mediana = document.getElementById("mediana");
const minimo = document.getElementById("minimo");
const maximo = document.getElementById("maximo");
const desviacion = document.getElementById("desviacionStandar");

function recibirDatos() {
  try{
  d = NaN;
  c = 0;
  s = 0;
  do { // DO para seguir cargando valores
    do{ // DO para que el usuario vuelva a intentarlo si no carga un numero
      let d = prompt("Ingrese un numero");
      valor = parseInt(d);
      console.log(typeof valor === Number());
      if(typeof valor === Number() || isNaN(valor)){
        alert('No ingresado un numero\nvuelva a intentrlo');
      }
    }while(typeof valor === Number() || isNaN(valor));
    console.log(valor);
    s += valor;
    datos[c] = valor;
    console.log(datos);
    c++;
  } while (confirm("desea continuar?"));
}catch(err){
  alert('Ha ocurrido un error ' + err.message)
}
}

function resumenDatos() {
  try {
    // se incorporo la biblioteca math.js para sacar la desviacion
    promedio.innerText = "Su promedio: " + s / parseInt(datos.length);
    mediana.innerText = "Su media: " + s / 2;
    minimo.innerText = "Su valor minimo: " + Math.min(...datos);
    maximo.innerText = "Su valor maximo: " + Math.max(...datos);
    desviacion.innerText = "Su desviacion Standar: " + math.std(...datos);
    datos = [];
  } catch (err) {
    alert("Ha surjido un error " + err.message);
    if (confirm('quieres volver a intentarlo?')) {
      recibirDatos();
    }
  }
}
