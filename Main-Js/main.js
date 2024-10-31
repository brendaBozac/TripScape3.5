const track = document.querySelector('.carousel-track'); //contenedor de las fotos
const images = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');




// Objeto que guarda las URLs de las ofertas con IDs únicos
const offers = {
    0: { url: './deals.html#excursion-1', name: 'Playa del Carmen' },
    1: { url: './deals.html#excursion-2', name: 'Cancún' },
    2: { url: './deals.html#excursion-3', name: 'Tulum' },
    3: { url: './deals.html#excursion-4', name: 'Puerto Vallarta' },
    4: { url: './deals.html#excursion-5', name: 'Los Cabos' }
}
// Inicialmente, mostramos las primeras cinco imágenes en el orden dado
let visibleImages = [...images];

// Función para renderizar las imágenes en el carrusel



function actualizarCarousel() {
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

    // Actualizar el enlace de la oferta
    const offerLink = document.getElementById('offer-link');
    const centralImageIndex = images.indexOf(visibleImages[2]); // Índice de la imagen central
    offerLink.href = offers[centralImageIndex].url; // Actualiza el enlace según la imagen central
    offerLink.style.display = 'block'; // Muestra el enlace
    offerLink.innerText = `${offers[centralImageIndex].name}`; // Muestra un texto personalizado
}

// Evento para el botón "next"
nextButton.addEventListener('click', () => {
    // Al hacer clic en "next", movemos la primera imagen al final
    visibleImages.push(visibleImages.shift());
    actualizarCarousel();
});

// Evento para el botón "prev"
prevButton.addEventListener('click', () => {
    // Al hacer clic en "prev", movemos la última imagen al inicio
    visibleImages.unshift(visibleImages.pop());
    actualizarCarousel();
});

// Inicializamos el carrusel en la carga
actualizarCarousel();

