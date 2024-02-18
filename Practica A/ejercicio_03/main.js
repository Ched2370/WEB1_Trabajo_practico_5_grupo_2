var btn = document.getElementById('btn');
btn.addEventListener('click', solucion);

const r = document.getElementById('respuesta');

function solucion(){

    var lista = new Array('a', 'b', 'c', '1', 'x', '9', 'd', '4');
    var item;
    
    for (item of lista) {
        if (item === '1' || item === '9' || item === '4'){ //IsNaN se podia colocar
            continue;
        } else {
            console.log(item);
        }
    }

    r.innerHTML = "<pre style='padding: 15px; color: greenyellow; font-family: sans-serif'>"+"var lista = new Array('a','b','c','1','x','9','d','4');" + "<br>" +
    "var item;" + "<br>" +
    "" + "<br>" +
    "for (item of lista) {" + "<br>" +
    "if (item === '1' || item === '9' || item === '4'){" + "<br>" +
    "continue;" + "<br>" +
    "} else {" + "<br>" +
    "console.log(item);" + "<br>" +
    "}};" + "</pre>";
}









