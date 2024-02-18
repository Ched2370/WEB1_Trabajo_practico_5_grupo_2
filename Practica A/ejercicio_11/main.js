const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];
const btn = document.getElementById('btn');
btn.addEventListener('click', mostrar);

const resp = document.getElementById('resDia');

function mostrar() {
    try {
        var varDay = document.getElementById('dias').value;
        var varMonth = document.getElementById('mes').value;
        var indiceMes = meses.indexOf(varMonth);
        var varYear = document.getElementById('año').value;

        console.log(varDay);
        console.log(varMonth);
        console.log(varYear);

        let patron = /^\d{4}$/;
        if(patron.test(varYear)){
            console.log('año correecto ' + varYear);
            var fecha = new Date(varYear, indiceMes, varDay);
            resp.innerText = fecha.toDateString();
            console.log(fecha);
        }else {
            console.log('año invalido ' + varYear);
            swal('Fecha invalida', 'Has ingresado un dato invalido', 'error');
        }
    } catch (err) {
        swal('Ha sujido un error ', err.message, 'error');
    }
}
