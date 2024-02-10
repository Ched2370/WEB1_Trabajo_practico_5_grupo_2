function calcularDiasVividos() {
    try {

        var nombre = document.getElementById('nombre').value;
        var edad = parseInt(document.getElementById('edad').value);
        var diasVividos = edad * 365;

        var resultado = nombre + ' ha vivido aproximadamente ' + diasVividos + ' días.';

        document.getElementById('res').innerText = resultado;
        console.log(resultado);
    } catch(err) {
        alert("Ha ocurrido un error: " + err.message);
    }
}
