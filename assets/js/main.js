const close = document.getElementById('close');
const mobileMenu = document.getElementById('mobile-menu');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    mobileMenu.style.display = 'block'
    hamburger.style.display = 'none'
});

close.addEventListener('click', () => {
    mobileMenu.style.display = 'none'
    hamburger.style.display = 'block'
})