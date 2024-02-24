const lista = ['Perro', 'Gato', 'Loro', 'Tortuga', 'Roudor', 'Pez', 'Reptil'];
const mascotas = document.getElementById('mascotas');
const option = document.createElement('option');

lista.forEach((masc, i) => {
    option.value =masc[i];
    mascotas.appendChild(option);
})