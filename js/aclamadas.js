
// agregar en el index.html type="module" en el script que llama a este js
import {fotosAclamadas} from "./data.js";

function generarFotosAclamadas(fotos) {

    
    const seccionFotos = document.querySelector('.fotosAclamadas');
    
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
