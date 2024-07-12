document.addEventListener("DOMContentLoaded", (event) => {
    const desktopRowSection = document.querySelector('.desktop-row');
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
    observer.observe(desktopRowSection);
    observer.observe(serviceSection);
    observer.observe(excellenceSection);
    observer.observe(serviceContact);



    const myCarousel = document.querySelector('#carouselExampleControls');
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000, 
        wrap: true 
    });

 
    myCarousel.addEventListener('mouseenter', function() {
        myCarousel.querySelector('.carousel-control-prev').style.visibility = 'visible';
        myCarousel.querySelector('.carousel-control-next').style.visibility = 'visible';
    });

    myCarousel.addEventListener('mouseleave', function() {
        myCarousel.querySelector('.carousel-control-prev').style.visibility = 'hidden';
        myCarousel.querySelector('.carousel-control-next').style.visibility = 'hidden';
    });
})