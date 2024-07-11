document.addEventListener("DOMContentLoaded", (event) => {
    const visionSection = document.querySelector('.content-vision');
    const valuesSection = document.querySelector('.content-values');
    
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
    observer.observe(visionSection);
    observer.observe(valuesSection);
})