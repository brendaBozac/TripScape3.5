const track = document.querySelector('.carousel-track'); //contenedor de las fotos
const images = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

// Inicialmente, mostramos las primeras cinco imágenes en el orden dado
let visibleImages = [...images];

// Función para renderizar las imágenes en el carrusel



function updateCarousel() {
    track.innerHTML = ''; // Limpiamos el track antes de actualizar

    visibleImages.forEach((img, i) => {
        img.className = 'carousel-image'; // Resetear las clases

        // Añadir clases para la imagen central y las adyacentes
        if (i === 2) {
            img.classList.add('center'); // La imagen en el índice 2 es la destacada
        } else if (i === 1 || i === 3) {
            img.classList.add('next'); // Imagen a la derecha de la central
            img.classList.add('prev'); // Imagen a la izquierda de la central
        } else {
            img.classList.add('extreme'); // Imágenes en los extremos
        }

        track.appendChild(img); // Añadir la imagen al track
    });
}

// Evento para el botón "next"
nextButton.addEventListener('click', () => {
    // Al hacer clic en "next", movemos la primera imagen al final
    visibleImages.push(visibleImages.shift());
    updateCarousel();
});

// Evento para el botón "prev"
prevButton.addEventListener('click', () => {
    // Al hacer clic en "prev", movemos la última imagen al inicio
    visibleImages.unshift(visibleImages.pop());
    updateCarousel();
});

// Inicializamos el carrusel en la carga
updateCarousel();




function renderImages() {
    track.innerHTML = '';

    visibleImages.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.classList.add('carousel-image');

        // Añadir clase 'active' a la imagen central (índice 2)
        if (index === 2) {
            imgElement.classList.add('active');
        }

        track.appendChild(imgElement);
    });
}