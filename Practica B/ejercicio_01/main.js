const btn = document.getElementById('btn');
btn.addEventListener('click', comprobar);

const num = document.getElementById('validar');

function comprobar() {
    try{
    patron = /^([1-9]|[1-9][0-9]|100)$/;
    if (patron.test(num.value)) {
        swal('Excelente', 'entrada correcta ' + num.value, 'success');// swal es un alert de la libreria sweetalert
    } else {
        swal('Kwak','entrada incorrecta', 'error');
    }
}catch(err){
    alert('Ha surjido un error ' + err.message);
}
}
