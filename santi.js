const mobileMenu = document.querySelector('.mobile-menu');
const menuHamburger = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const menuEmail = document.querySelector('.navbar-email');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');


menuHamburger.addEventListener('click', toggleMobileMenu);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuCartIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    shoppingCartContainer.classList.toggle('inactive');
}