const btn = document.getElementById("btn");
btn.addEventListener("click", validar);
const tcuerpo = document.getElementById("tcuerpo");
cancion = [];
contador = 0;

function validar() {
  try {
    const nombre = document.getElementById("nombre");
    const compositor = document.getElementById("compositor");
    const duracion = document.getElementById("duracion");
    const patronNombre = /[a-zA-ZÁÉÍÓÚáéíóúÑñ\s']+/;
    const patronCompositor = /[a-zA-ZÁÉÍÓÚáéíóúÑñ\s']+/;
    const patronDuracion =
      /^(?:[0-5][0-9]|60):(?:[0-5][0-9]|60):(?:[0-5][0-9]|60)$/;
    console.log(patronNombre.test(nombre.value));
    console.log(patronCompositor.test(compositor.value));
    console.log(patronDuracion.test(duracion.value));

    if (
      patronNombre.test(nombre.value) &&
      patronCompositor.test(compositor.value) &&
      patronDuracion.test(duracion.value)
    ) {
      cancion[contador] =
        '<tr class="cancion">' +
        '<td class="datos">' +
        nombre.value +
        "</td>" +
        '<td class="datos">' +
        compositor.value +
        "</td>" +
        '<td class="datos">' +
        duracion.value +
        "</td>" +
        "</tr>";
      tcuerpo.innerHTML += cancion[contador];
      contador++;
      nombre.value = ''; 
      compositor.value = ''; 
      duracion.value = ''; 
    } else {
      swal("Cuidado", "formato invalido", "warning");
    }
  } catch (err) {
    swal("ERROR", "Ha surgido un error\n" + err.message, "error");
  }
}
