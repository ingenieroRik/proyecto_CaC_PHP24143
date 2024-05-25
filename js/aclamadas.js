
const fotosAclamadas = [
    { src: './assets/img/deep_purple_2.jpg', alt: 'aclamada_1', loading: 'deep_purple' },
    { src: './assets/img/deep_purple_3.jpg', alt: 'aclamada_2', loading: 'deep_purple' },
    { src: './assets/img/kiss_4.jpg', alt: 'aclamada_3', loading: 'kiss' },
    { src: './assets/img/kiss_5.jpg', alt: 'aclamada_4', loading: 'kiss' },
    { src: './assets/img/viticus_4.jpg', alt: 'aclamada_5', loading: 'kiss' },
    { src: './assets/img/kiss_6.jpg', alt: 'aclamada_6', loading: 'kiss' },
    { src: './assets/img/kiss_11.jpg', alt: 'aclamada_7', loading: 'kiss' },
    { src: './assets/img/kiss_8.jpg', alt: 'aclamada_8', loading: 'kiss' },
    { src: './assets/img/kiss_9.jpg', alt: 'aclamada_9', loading: 'kiss' },
    { src: './assets/img/kiss_10.jpg', alt: 'aclamada_10', loading: 'kiss' },
    { src: './assets/img/kiss_11.jpg', alt: 'aclamada_11', loading: 'kiss' },
    { src: './assets/img/scorpions_3.jpg', alt: 'aclamada_12', loading: 'kiss' },
];

function generarFotosAclamadas(fotos) {
    const seccionFotos = document.querySelector('.aclamadas');

    
    const divAclamadas = document.createElement('div');
    divAclamadas.classList.add('aclamadas');
    seccionFotos.appendChild(divAclamadas);

    fotos.forEach(foto => {
        const divFotoItem = document.createElement('div');
        divFotoItem.classList.add('fotoItem');

        const img = document.createElement('img');
        img.classList.add('imgAclamada');
        img.setAttribute('src', foto.src);
        img.setAttribute('alt', foto.alt);
        img.setAttribute('loading', foto.loading);

        divFotoItem.appendChild(img);
        divAclamadas.appendChild(divFotoItem);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    generarFotosAclamadas(fotosAclamadas);
});
