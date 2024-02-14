const btn = document.getElementById('btn');
btn.addEventListener('click', calcularDias);

const fecha = document.getElementById('calendario');
const respuesta = document.getElementById('respuesta');

function calcularDias() {
  try{
  var fechaSeleccionada = new Date(fecha.value);
  var fechaActual = new Date();
  var diferencia = fechaSeleccionada - fechaActual;
  var dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));// conversion de milisegundos a dias
  if(dias == 0){
    respuesta.innerText = 'Hoy es un gran dia!';
  }else if(fechaSeleccionada < fechaActual){
    respuesta.innerText = 'Han transcurrido ' + Math.abs(dias) + ' dias';
  }else if(fechaSeleccionada > fechaActual){
    respuesta.innerText = 'Faltan ' + dias + ' dias';
  }else {
    alert('No has ingresado una fecha,\nvuelve a intentarlo');
  }
}catch(err){
  alert('Ha surjido un error ' + err.message);
}
}