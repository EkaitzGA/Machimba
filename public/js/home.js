//carrusel


class Carousel {
    constructor(elements) {
        this.container = document.getElementById('carousel-container');
        this.elements = elements;
        this.init();
    }

    init() {
        const wrapper = document.createElement('div');
        wrapper.className = 'carousel-wrapper';
        this.container.appendChild(wrapper);

        const track = document.createElement('div');
        track.className = 'carousel-track';
        wrapper.appendChild(track);

        const slidesContainer = document.createElement('div');
        slidesContainer.className = 'slides-container';
        track.appendChild(slidesContainer);

        
        const totalSets = 2;
        for (let i = 0; i < totalSets; i++) {
            this.elements.forEach(element => {
                const slide = document.createElement('div');
                slide.className = 'carousel-slide';
                
                const imgContainer = document.createElement('div');
                imgContainer.className = 'image-container';
                
                const img = document.createElement('img');
                img.src = element.image;
                img.alt = 'Carrusel imagen';
                
                imgContainer.appendChild(img);
                slide.appendChild(imgContainer);
                slidesContainer.appendChild(slide);
            });
        }

        
        slidesContainer.addEventListener('mouseenter', () => {
            slidesContainer.style.animationPlayState = 'paused';
        });
        
        slidesContainer.addEventListener('mouseleave', () => {
            slidesContainer.style.animationPlayState = 'running';
        });
    }
}


const elements = [
    { image: "/public/resources/carrusel_images/vertical1.png" },
    { image: "/public/resources/carrusel_images/vertical2.png" },
    { image: "/public/resources/carrusel_images/vertical3.png" },
    { image: "/public/resources/carrusel_images/vertical4.png" },
    { image: "/public/resources/carrusel_images/vertical5.png" },
    { image: "/public/resources/carrusel_images/vertical6.png" },
    { image: "/public/resources/carrusel_images/vertical7.png" }
];

new Carousel(elements);

