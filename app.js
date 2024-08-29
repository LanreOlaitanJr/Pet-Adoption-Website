const navbar = document.querySelector('nav');
window.addEventListener('scroll', () =>
    navbar.classList.toggle('sticky', window.scrollY > 0)
);

const menu = document.querySelector('.menu');
const toggleMenu = () => menu.classList.toggle('active');

document.querySelector('.menu-btn').addEventListener('click', toggleMenu);
document.querySelector('.close-btn').addEventListener('click', toggleMenu);

document 
    .querySelectorAll('menu a')
    .forEach((link) => link.addEventListener('click', toggleMenu));

// Smooth Scolling
const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
lenis.on("scroll", ScrollTrigger.update);
WebGLSampler.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// Scroll Reavel
const sr = ScrollReveal({
    origin: "bottom",
    distance: "40px",
    duration: 800,
    delay: 200,
    easing: "ease-in-out"
});

gsap.to("nav", {
    opacity: 1,
    duration: 2
});
sr.reveal(".hero-headlines h1");
sr.reveal(".hero-headlines p", {delay: "500"});
sr.reveal(".hero-headlines buttons", {delay: "1000"});
sr.reveal(".hero-headlines buttons", {delay: "1000"});
sr.reveal(".hero-headlines img", {
    opacity: 0,
    duration: 1,
    stagger: 0.5
});

sr.reveal(".adoption-proc h1");
sr.reveal(".adoption-proc p", {delay: "500"});
sr.reveal(".requirements-img", {delay: "500", origin: "left"});
sr.reveal(".reg-item", {delay: "1000"});
sr.reveal(".find-more-text h1");
sr.reveal(".img-left", {origin: "left"});
sr.reveal(".img-right", {origin: "right"});
sr.reveal(".img-content h2");
sr.reveal(".img-content p", {delay: "500"});
sr.reveal(".find-more-btn");
sr.reveal(".about-text h1");
sr.reveal(".about-text p", {delay: "500"});
sr.reveal(".about-img", {origin: "right"});
sr.reveal(".testimonials h2", {delay: "500"});
sr.reveal(".testimonials h1");
sr.reveal(".testimony-item", {delay: "1000"});
sr.reveal(".form-container p", {delay: "500"});
sr.reveal(".form h2", {delay: "500"});
sr.reveal(".form button");
sr.reveal(".form-img", {origin: "left"});
sr.reveal(".links h2", {origin: "left"});
sr.reveal(".a-links a", {origin: "left"});
sr.reveal(".socials h1");
sr.reveal(".socials p", {delay: "300"});
sr.reveal(".media i", {delay: "500"});
sr.reveal(".contact", {delay: "500", origin: "right"});
sr.reveal(".copyright", {delay: "600", origin: "bottom"});
