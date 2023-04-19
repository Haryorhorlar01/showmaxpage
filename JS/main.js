let nav = document.querySelector('.nav');

nav.addEventListener('scroll', scrollNav);

function scrollNav() {
    if (document.documentElement.scrollTop > 20) {
        window.classList.add('sticky');
    }
}