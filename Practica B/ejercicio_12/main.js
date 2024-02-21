const btnAgregar = document.getElementById("btnAgregar");
const btnModificar = document.getElementById("btnModificar");
const btnEliminar = document.getElementById("btnEliminar");

btnAgregar.addEventListener("click", agregar);
btnModificar.addEventListener("click", modificar);
btnEliminar.addEventListener('click', eliminar);

function agregar() {
  try {
    let agregar = document.getElementById("agregar");
    let select = document.getElementById("select");
    let option = document.createElement("option");
    option.classList.add("opciones");
    console.log(agregar.value);
    option.innerText = agregar.value;
    agregar.value = "";
    select.appendChild(option);
  } catch (err) {
    swal("ERROR", "Ha surjido un error\n" + err.message, "error");
  }
}

function modificar() {
  try {
    let modificar = document.getElementById("agregar");
    console.log("mod " + modificar.value);
    let select = document.getElementById("select");
    console.log("sel " + select.value);
    let opciones = document.getElementsByClassName("opciones");
    for (let i = 0; i < opciones.length; i++) {
      if (opciones[i].value === select.value) {
        opciones[i].innerText = modificar.value;
      }
    }
  } catch (err) {
    swal("ERROR", "Ha surjido un error\n" + err.message, "error");
  }
}

function eliminar() {
  try {
    let select = document.getElementById("select");
    console.log("sel " + select.value);
    let opciones = document.getElementsByClassName("opciones");
    for (let i = 0; i < opciones.length; i++) {
      if (opciones[i].value === select.value) {
        opciones[i].remove();
      }
    }
  } catch (err) {
    swal("ERROR", "Ha surjido un error\n" + err.message, "error");
  }
}
