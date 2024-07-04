document.addEventListener("DOMContentLoaded", (event) => {
    const serviceSection = document.querySelector('.service-section');
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


    // ****** Contact-Button Observer ******//
    const serviceContact = document.querySelector('.contact-button');
    const observerContactOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerContactCallback = (entries, observer) => {
        entries.forEach(entry  => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observerContact = new IntersectionObserver(observerContactCallback, observerContactOptions);
    observerContact.observe(serviceContact);

})