const style = document.getElementById('style');

function leon(){
    setTimeout(() => {
    style.innerHTML = '#gato{z-index: -1}';}, 300)
}

function gato(){
    setTimeout(() => {
        style.innerHTML = '#gato{z-index: 1}';}, 300)
}