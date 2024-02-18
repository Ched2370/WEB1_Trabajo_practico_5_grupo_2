const btn = document.getElementById("btn");
btn.addEventListener("click", validar);

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const fecha = document.getElementById("fecha");
const email = document.getElementById("email");

    patronNombre = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s']+$/; // para validar nombre

    patronApellido = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s']+$/; //para validar apellido
/*
    patronFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/((19|20)\d\d)$/; // para validar fecha
*/
    patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //para validar email

function validar() {
  try {

    if (patronNombre.test(nombre.value) && patronApellido.test(apellido.value) && patronEmail.test(email.value) && isNaN(fecha.value)) {
      swal("Excelente", "Todos los datos son  validos", "success"); // swal de la biblioteca sweetalert retoca los alertas
    } else {
      swal("Ohh!!!", "ha faltaddo algun campo\nvuelve a intentarlo", "error");
    }
  } catch (err) {
    swal(
      "Houston, tenemos un problema",
      "ha surjido un error " + err.message,
      "error"
    );
  }
}
