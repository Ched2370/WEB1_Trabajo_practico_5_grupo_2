const btn = document.getElementById('btn');
btn.addEventListener('click', cambiar);

function cambiar(){
    try {
        const img = document.getElementById('img');
        const parrafo = document.getElementById('parraf');
        const classImg = img.className;
        const classParrafo = parrafo.className;
        if (classImg === 'imagen') {
            img.className = 'imagen2';
            parrafo.className = 'parrafo2';
        } else {
            img.className = 'imagen';
            parrafo.className = 'parrafo';
            
        }
    } catch (err) {
        swal('ERROR', 'Ha surjido un error ' + err.message, 'error');
    }
}