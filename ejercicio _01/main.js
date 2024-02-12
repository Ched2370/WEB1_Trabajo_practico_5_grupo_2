var boton = document.getElementById("boton");
boton.addEventListener("click", calcularDiasVividos);

function calcularDiasVividos() {
    try {
        
        var nombre = prompt('Ingrese su nombre');
        var edad = prompt('Ingrese su edad');
        var diasVividos = edad * 365;

        var resultado = nombre + ' ha vivido aproximadamente ' + diasVividos + ' días.';
        document.getElementById('res').innerText = resultado;

        console.log(resultado);

    } catch(err) {
        alert("Ha ocurrido un error: " + err.message);
    }
}
