document.addEventListener("DOMContentLoaded", (event) => {
    const minWidthResponsive = 1200;
    const cardsContent = document.querySelector('.works-descriptionContent');
    const container = document.querySelector('.worksContent');
    const contentDescription = document.querySelectorAll('.workContent-card_1, .workContent-card_2, .workContent-card_3, .workContent-card_4');

    if(window.matchMedia(`(min-width: ${minWidthResponsive}px)`).matches){
        contentDescription.forEach(element => {
            element.classList.remove('col-md-6');
        });
        cardsContent.classList.remove('row');
        container.classList.remove('container');
    }

    const bedroomSection = document.querySelector('.workContent-card_1');
    const kitchenSection = document.querySelector('.workContent-card_2');
    const hallwaySection = document.querySelector('.workContent-card_3');
    const specialtySection = document.querySelector('.workContent-card_4');
    const serviceContact = document.querySelector('.contact-button');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(bedroomSection);
    observer.observe(kitchenSection);
    observer.observe(hallwaySection);
    if (specialtySection) {
        observer.observe(specialtySection);
    }
    observer.observe(serviceContact);


})