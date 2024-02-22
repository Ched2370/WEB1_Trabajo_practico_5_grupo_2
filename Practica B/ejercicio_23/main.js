const btn = document.getElementById('btn');
btn.addEventListener('click', navegador);
const respuesta = document.getElementById('respuesta');

function navegador() {
    let nav = '';
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf("Edg") != -1) {
        nav = 'Edge';
    } else if (userAgent.indexOf("Opera") != -1 || userAgent.indexOf("OPR") != -1) {
        nav = 'Opera';
    } else if (userAgent.indexOf("Chrome") != -1) {
        nav = 'Chrome';
    } else if (userAgent.indexOf("Firefox") != -1) {
        nav = 'Firefox';
    } else if (userAgent.indexOf("Safari") != -1) {
        nav = 'Safari';
    } else if (userAgent.indexOf("MSIE") != -1 || !!document.documentMode == true) {
        nav = 'Internet Explorer';
    }
    console.log(userAgent);
    respuesta.innerText = nav;
}

