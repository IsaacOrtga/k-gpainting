document.addEventListener("DOMContentLoaded", (event) => {
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
        entries.forEach(entry  => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(bedroomSection);
    observer.observe(kitchenSection);
    observer.observe(hallwaySection);
    observer.observe(specialtySection);
    observer.observe(serviceContact);
})