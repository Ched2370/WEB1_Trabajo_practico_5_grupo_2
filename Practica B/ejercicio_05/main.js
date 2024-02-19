const btn = document.getElementById('btn');
btn.addEventListener('click', validar);

function validar() {
    try {
        const nombre = document.getElementById('nombre').value;
        const telefono1 = document.getElementById('telefono1').value;
        const telefono2 = document.getElementById('telefono2').value;
        const telefono3 = document.getElementById('telefono3').value;
        const email = document.getElementById('email').value;
        console.log(nombre);
        console.log(telefono1);
        console.log(telefono2);
        console.log(telefono3);
        console.log(email);

        patronNombre = /[a-zA-ZÁÉÍÓÚáéíóúÑñ\s']+/;
        patronTelefono = /^\d{4}\s\d{4}$/;
        patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        console.log(patronNombre.test(nombre));
        console.log(patronTelefono.test(telefono1));
        console.log(patronTelefono.test(telefono2));
        console.log(patronTelefono.test(telefono3));
        console.log(patronEmail.test(email));
        console.log(!telefono1);

        if ((telefono1 || telefono2 || telefono3) && (patronTelefono.test(telefono1) || patronTelefono.test(telefono2) || patronTelefono.test(telefono3))) {
            if ((nombre || email) && (patronNombre.test(nombre) && patronEmail.test(email))) {
                swal('Excelente', 'validacion fue excitosa!', 'success')
            } else {
                swal('CUIDADO!', 'nombre o e-mail invalido', 'warning')
            }
        } else {
            swal('CUIDADO!', 'telefono invalido', 'warning');
        }
    } catch (err) {
        swal('ERROR', 'Ha surjido un error ' + err.message, 'error');
    }
}