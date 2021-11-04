const nav = document.querySelector('nav.home.home__nav');

nav.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
        nav.classList.remove('active')
    } else { nav.classList.add('active') }
})