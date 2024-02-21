const btnAnterio = document.getElementById("ant");
btnAnterio.addEventListener("click", anterior);
const btnSiguiente = document.getElementById("sig");
btnSiguiente.addEventListener('click', siguiente);
const imagenes = document.getElementsByClassName("imagenes");

function anterior() {
  let target = null;
  for (let i = 0; i < imagenes.length; i++) {
    if (imagenes[i].style.zIndex === '1') {
      target = imagenes[i].id;
    }
    
  }
  let fuego = document.getElementById('fuego');
  let volcan = document.getElementById('volcan');
  let astro3 = document.getElementById('astro3');
  let astro2 = document.getElementById('astro2');
  let astro1 = document.getElementById('astro1');
  let tierra = document.getElementById('tierra');
  
  console.log(target);
  switch (target) {
    case "fuego":
      fuego.style.zIndex = 0;
      volcan.style.zIndex = 1;
      console.log("fuego");
      break;
      case "volcan":
      volcan.style.zIndex = 0;
      astro3.style.zIndex = 1;
      console.log("volcan");
      break;
      case "astro3":
      astro3.style.zIndex = 0;
      astro2.style.zIndex = 1;
      console.log("astro3");
      break;
    case "astro2":
      astro2.style.zIndex = 0;
      astro1.style.zIndex = 1;
      console.log("astro2");
      break;
    case "astro1":
      astro1.style.zIndex = 0;
      tierra.style.zIndex = 1;
      console.log("astro1");
      break;
    case "tierra":
      tierra.style.zIndex = 0;
      fuego.style.zIndex = 1;
      console.log("tierra");
      break;

    default:
      break;
  }
}

function siguiente() {
  let target = null;
  for (let i = 0; i < imagenes.length; i++) {
    if (imagenes[i].style.zIndex === '1') {
      target = imagenes[i].id;
    }
    
  }
  let fuego = document.getElementById('fuego');
  let volcan = document.getElementById('volcan');
  let astro3 = document.getElementById('astro3');
  let astro2 = document.getElementById('astro2');
  let astro1 = document.getElementById('astro1');
  let tierra = document.getElementById('tierra');
  
  console.log(target);
  switch (target) {
    case "fuego":
      fuego.style.zIndex = 0;
      tierra.style.zIndex = 1;
      console.log("fuego");
      break;
      case "volcan":
      volcan.style.zIndex = 0;
      fuego.style.zIndex = 1;
      console.log("volcan");
      break;
      case "astro3":
      astro3.style.zIndex = 0;
      volcan.style.zIndex = 1;
      console.log("astro3");
      break;
    case "astro2":
      astro2.style.zIndex = 0;
      astro3.style.zIndex = 1;
      console.log("astro2");
      break;
    case "astro1":
      astro1.style.zIndex = 0;
      astro2.style.zIndex = 1;
      console.log("astro1");
      break;
    case "tierra":
      tierra.style.zIndex = 0;
      astro1.style.zIndex = 1;
      console.log("tierra");
      break;

    default:
      break;
  }
}