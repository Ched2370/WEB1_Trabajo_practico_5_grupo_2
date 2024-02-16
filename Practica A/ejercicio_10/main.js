const btn = document.getElementById('btn');
btn.addEventListener('click', calcularDias);

const respuesta = document.getElementById('respuesta');

function calcularDias() {
  try {
    var fecha = document.getElementById('calendario').value;
    var fechaP = [];
    fechaP = fecha.split('/');
    var fechaS = new Date(
      fechaP[2],
      fechaP[1] - 1,
      fechaP[0]
    );
    var fechaA = new Date();
    console.log(fechaS);
    console.log(fechaA);
    var dif = fechaS - fechaA;
    var dias = Math.ceil(dif / (1000 * 60 * 60 * 24)); // conversion de milisegundos a dias
    if (dias == 0) {
      respuesta.innerText = 'Hoy es un gran dia!';
    } else if (fechaS < fechaA) {
      respuesta.innerText = 'Han transcurrido ' + Math.abs(dias) + ' dias';
    } else if (fechaS > fechaA) {
      respuesta.innerText = 'Faltan' + dias + ' dias';
    } else {
      fecha.value = '';
      alert("Fecha invalida");
    }
  } catch (err) {
    alert("Ha surjido un error " + err.message);
  }
}
