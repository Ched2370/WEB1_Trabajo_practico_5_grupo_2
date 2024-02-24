const lista = ['Perro', 'Gato', 'Loro', 'Tortuga', 'Roudor', 'Pez', 'Reptil'];
const mascotas = document.getElementById('mascotas');

lista.forEach(masc => {
    const option = document.createElement('option');
    option.innerText = masc;
    mascotas.appendChild(option);
})