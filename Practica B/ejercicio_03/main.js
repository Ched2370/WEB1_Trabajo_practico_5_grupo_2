const btn = document.querySelector("#btn");
btn.addEventListener("click", validar);

function validar() {
  try {
    const nombre = document.querySelector("#nombre");
    const edad = document.querySelector("#edad");
    const email = document.querySelector("#email");

    const patronNombre = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s']{4,}$/;
    const patronEdad = /^(1[8-9]|2[0-9]|30)$/;
    const patronEmail = /^[a-zA-Z0-9._%+-]{5,}@[a-zA-Z0-9.-]{5,}\.[a-zA-Z]{2,}$/;

    console.log(patronNombre.test(nombre.value));
    console.log(patronEdad.test(edad.value));
    console.log(patronEmail.test(email.value));
    console.log('');

    if (
      patronNombre.test(nombre.value) &&
      patronEdad.test(edad.value) &&
      patronEmail.test(email.value)
    ) {
      swal("EXCELENTE!!!", "Todos los campos son válidos", "success");
    } else {
      swal(
        "Cuidado!",
        "Alguno de los campos no ha sido completado correctamente,\nvuelve a intentarlo",
        "warning"
      );
    }
  } catch (err) {
    swal("ERROR", "Ha surgido un error " + err.message, "error");
  }
}
