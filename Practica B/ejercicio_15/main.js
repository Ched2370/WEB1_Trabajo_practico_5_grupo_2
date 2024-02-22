const btn = document.getElementById('btn');
btn.addEventListener('click', cambiarStyle);

function cambiarStyle() {
    try {
        const style = document.getElementById('style');
        const href = style.getAttribute('href');
        console.log(href);
        
        if (href === 'style1.css') {
            style.href = 'style2.css';
        }else {
            style.href = 'style1.css';
        }
    } catch (err) {
        swal('ERROR', 'Ha surjido un error ' + err.message, 'error');
    }
}