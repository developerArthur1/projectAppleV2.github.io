"use strict";

const headerButton = document.querySelector('.header__button');
const header = document.querySelector('.header-mobile');
const menuMobile = document.querySelector('.menu-mobile-block');
const contentWrap = document.querySelector('.content-wrap');
const footer = document.querySelector('.footer-wrap');

headerButton.addEventListener('click', () => {
    header.classList.toggle('menu-mobile--active');
    menuMobile.classList.toggle('menu-mobile--active');
    contentWrap.classList.toggle('none');
    footer.classList.toggle('none');
})

$(document).ready(function() {
	$('.footer-mobile__accordeon .footer-mobile__item').on('click', my_func);
});
function my_func(){
    $('.footer-mobile__accordeon .footer-mobile__column').not($(this).next());
    $(this).next().toggleClass("active");
}
