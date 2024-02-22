const btn = document.getElementById('enviar');
btn.addEventListener('click', validar);


function validar() {
    try {
        const user = document.getElementById('iduser');
        const pass = document.getElementById('idpass');
        console.log(user.value);
        console.log(pass.value);

        const patronUser = /^[A-Z][a-zA-Z0-9]*\d[a-zA-Z0-9]*\d[a-zA-Z0-9]*\d/;
        const patronPass = /^\d[a-zA-Z0-9]{6,}[A-Z]\d$/;

        if (patronUser.test(user.value) && patronPass.test(pass.value)) {
            swal('Excelente', 'Has podido ingresar', 'success');
            user.value = '';
            pass.value = '';
        }else {
            swal('Cuidado', 'no ha complido con los parametros', 'warning')
        }
    } catch (err) {
        swal('ERROR', 'Ha surgido un error ' + err.message, 'error');
    }
}