const btn = document.getElementById("tirar");
btn.addEventListener("click", tirarDados);

function tirarDados() {
  try {
    num = Math.floor(Math.random() * 6) + 1;
    dado = document.getElementById("dado");
    dado.src = 'img/' + num + ".JPG";
  } catch (err) {
    swal("ERROR", "Ha surjido un error" + err.message, "error");
  }
}
