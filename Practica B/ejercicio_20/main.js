const t1 = document.getElementById('titulo-1');
t1.addEventListener('mouseover', function(){
    setTimeout(() => {
        t1.style = 'visibility: hidden';
    }, 200);
});
t1.addEventListener('mouseleave', function(){
    setTimeout(() => {
        t1.style = 'visibility: visible';
    }, 200);
});

const t2 = document.getElementById('titulo-2');
t2.addEventListener('mouseover', function(){
    setTimeout(() => {
        t2.style = 'visibility: hidden';
    }, 200);
});
t2.addEventListener('mouseleave', function(){
    setTimeout(() => {
        t2.style = 'visibility: visible';
    }, 200);
});

const p1 = document.getElementById('parrafo-1');
p1.addEventListener('mouseover', function(){
    setTimeout(() => {
        p1.style = 'visibility: hidden';
    }, 200);
});
p1.addEventListener('mouseleave', function(){
    setTimeout(() => {
        p1.style = 'visibility: visible';
    }, 200);
});

const p2 = document.getElementById('parrafo-2');
p2.addEventListener('mouseover', function(){
    setTimeout(() => {
        p2.style = 'visibility: hidden';
    }, 200);
});
p2.addEventListener('mouseleave', function(){
    setTimeout(() => {
        p2.style = 'visibility: visible';
    }, 200);
});

const img = document.getElementById('img');
img.addEventListener('mouseover', function(){
    setTimeout(() => {
        img.style = 'visibility: hidden';
    }, 200);
});
img.addEventListener('mouseleave', function(){
    setTimeout(() => {
        img.style = 'visibility: visible';
    }, 200);
});

