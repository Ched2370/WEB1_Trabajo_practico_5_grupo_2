const canvas = document.getElementById('myCanvas');
const title = document.getElementById('title');

canvas.addEventListener('mousemove', function(evt){
    const x = evt.clientX - canvas.getBoundingClientRect().left;
    const y = evt.clientY - canvas.getBoundingClientRect().top;
    
    title.innerText= 'X: ' + x + ' - Y: ' + y;
});