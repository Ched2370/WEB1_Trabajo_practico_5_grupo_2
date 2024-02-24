const btn = document.getElementById('btn');
btn.addEventListener('mouseover', escapar);
btn.addEventListener('click', ganaste);

function escapar() {
    try {
        let coordX = Math.floor(Math.random() * 80) + 1;
        let coordY = Math.floor(Math.random() * 90) + 1;
        btn.style = 
        'top: ' + coordY + 'vh;\n' +
        'left: ' + coordX + 'vw;';
    } catch (err) {
        alert('algo a salido mal ' + err.message);
    }
}

var contador = 0;
function ganaste() {
    try {
        contador ++;
        const p = document.createElement('p');
        p.innerText = 'LO LOGRASTE ' + contador;
        btn.insertAdjacentElement('beforebegin', p); 
    } catch (err) {
        alert('algo a salido mal ' + err.message);
    }
}