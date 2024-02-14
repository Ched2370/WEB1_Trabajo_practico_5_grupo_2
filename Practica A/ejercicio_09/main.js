const apellido = document.getElementById('apellido');
const nombre = document.getElementById('nombre');
const fechaNac = document.getElementById('fechaNac');
const cuerpo = document.getElementById('cuerpo');

const btn = document.getElementById('btn');
btn.addEventListener('click', guardarDatos);
const contador = 0;
const personas = [];

function guardarDatos(){

    personas[contador] = 
    '<tr class="persona">' +
        '<td class="datos">' + apellido.value + '</td>' +
        '<td class="datos">' + nombre.value + '</td>' +
        '<td class="datos">' + fechaNac.value + '</td>' +
    '</tr>';

    cuerpo.innerHTML += personas[contador];

    apellido.value = '';
    nombre.value = '';
    fechaNac.value = '';
    contador ++;
    document.write(contador);
}