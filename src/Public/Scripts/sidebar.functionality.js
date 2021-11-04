const menu = document.querySelector('nav .menu');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
        nav.classList.remove('active')
        open_menu.classList.remove('opened');
    } else {
        nav.classList.add('active')
    }
})

const open_menu = document.querySelector('.open_menu');
open_menu.addEventListener('click', () => {
    open_menu.classList.add('opened');
    nav.classList.add('active')
})