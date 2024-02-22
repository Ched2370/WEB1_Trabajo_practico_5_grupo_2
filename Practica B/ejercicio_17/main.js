const btn = document.getElementById('btn');
btn.addEventListener('click', comprobar);

function comprobar() {
    try {
        const frase = document.getElementById('fraseIngresada').value;
        const respuesta = document.getElementById('respuesta');

        if (frase) {
            for (let i = 0; i < frase.length; i++) {
                setTimeout(() => {
                    respuesta.innerHTML += frase[i];// con innerText no me conservaba los espacios en blanco,  me volvi chango
                }, i * 700);
            }
        } else {
            swal('Cuidado', 'El campo está vacío', 'warning');
        }
    } catch (err) {
        swal('ERROR', 'Ha surgido un error ' + err.message, 'error');
    }
}
