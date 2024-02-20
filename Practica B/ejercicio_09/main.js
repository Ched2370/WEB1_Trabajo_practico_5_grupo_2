const v1 = document.getElementById('v1');
const f1 = document.getElementById('f1');
const v2 = document.getElementById('v2');
const f2 = document.getElementById('f2');
const v3 = document.getElementById('v3');
const f3 = document.getElementById('f3');

const res1 = document.getElementById('res1');
const res2 = document.getElementById('res2');
const res3 = document.getElementById('res3');

const btn = document.getElementById('btn');
btn.addEventListener('click', comprobarQuest1);
btn.addEventListener('click', comprobarQuest2);
btn.addEventListener('click', comprobarQuest3);

function comprobarQuest1() {
    try {
        if (v1.checked) {
            console.log('bien');
            res1.innerHTML = 'CORRECTO!';
        }else if(f1.checked){
            console.log('mal');
            res1.innerHTML = 'INCORRECTO';
        }else {
            res1.innerHTML = 'no has selecionado una respuesta';
            swal('Cuidado', 'no has seleccionado una respuesta en la quest1', 'warning');
        }
    } catch (err) {
        swal('ERROR', 'Debes seleccionar tu respuesta ' + err.message, 'error');
    }
}

function comprobarQuest2() {
    try {
        if (v2.checked) {
            console.log('mal');
            res2.innerHTML = 'INCORRECTO';
        }else if(f2.checked){
            console.log('bien');
            res2.innerHTML = 'CORRECTO!';
        }else {
            res2.innerHTML = 'no has selecionado una respuesta';
            swal('Cuidado', 'no has seleccionado una respuesta en la quest3', 'warning');
        }
    } catch (err) {
        swal('ERROR', 'Debes seleccionar tu respuesta ' + err.message, 'error');
    }
}

function comprobarQuest3() {
    try {
        if (v3.checked) {
            console.log('bien');
            res3.innerHTML = 'CORRECTO!';
        }else if(f3.checked){
            console.log('mal');
            res3.innerHTML = 'INCORRECTO';
        }else {
            res1.innerHTML = 'no has selecionado una respuesta';
            swal('Cuidado', 'Debes seleccionar tu respuesta ', 'warning');
        }
    } catch (err) {
        swal('ERROR', 'Debes seleccionar tu respuesta ' + err.message, 'error');
    }
}