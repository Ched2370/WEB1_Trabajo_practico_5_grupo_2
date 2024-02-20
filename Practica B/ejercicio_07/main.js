const peso = document.getElementById('peso');
const dolar = document.getElementById('dolar');

dolar.addEventListener('input', calcularDolar);
peso.addEventListener('input', calcularPesos);

patron = /^\d+\.?\d\d$/;

function calcularPesos() {
    try {
        if (patron.test(peso.value)) {
            console.log('ok, va bien');
            dolar.value = parseFloat(peso.value / 1110).toFixed(2);
        }else {
            dolar.value = 0;
            console.log('no paso');
        }
        
    } catch (err) {
        swal('ERROR', 'Ha surjido un error ' + err.message, 'error');
    }
}

function calcularDolar() {
    try {
        if (patron.test(dolar.value)) {
            console.log('ok, va bien');
            peso.value = parseFloat(dolar.value * 1110).toFixed(2);
        }else {
            peso.value = 0;
            console.log('no paso');
        }
        
    } catch (err) {
        swal('ERROR', 'Ha surjido un error ' + err.message, 'error');
    }
}