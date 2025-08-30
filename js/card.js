document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // فقط یکبار اجرا بشه
            }
        });
    }, { threshold: 0.2 }); // وقتی 20٪ از کارت دیده بشه

    cards.forEach(card => {
        observer.observe(card);
    });
});
