document.addEventListener("DOMContentLoaded", (event) => {
    const serviceSection = document.querySelector('.service-section');
    const excellenceSection = document.querySelector('.container-excellence');
    const serviceContact = document.querySelector('.contact-button');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry  => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(serviceSection);
    observer.observe(excellenceSection);
    observer.observe(serviceContact);



    const myCarousel = document.querySelector('#carouselExampleControls');
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000, // Intervalo de desplazamiento automático en milisegundos (ej. 5000 = 5 segundos)
        wrap: true // Permite que el carrusel vuelva al principio después de la última diapositiva
    });

    // Muestra las flechas al pasar el mouse sobre el carrusel
    myCarousel.addEventListener('mouseenter', function() {
        myCarousel.querySelector('.carousel-control-prev').style.visibility = 'visible';
        myCarousel.querySelector('.carousel-control-next').style.visibility = 'visible';
    });

    // Oculta las flechas cuando el mouse sale del carrusel
    myCarousel.addEventListener('mouseleave', function() {
        myCarousel.querySelector('.carousel-control-prev').style.visibility = 'hidden';
        myCarousel.querySelector('.carousel-control-next').style.visibility = 'hidden';
    });
})