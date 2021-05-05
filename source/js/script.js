'use strict';

let menu = document.querySelector('.main-nav');
let menuToggle = document.querySelector('.main-nav__toggle');

menu.classList.add('main-nav--closed');

let openMenu = function () {
  menu.classList.remove('main-nav--closed');

}

let closeMenu = function () {
  menu.classList.add('main-nav--closed');
}

menuToggle.addEventListener('click', function () {
  if (menu.classList.contains('main-nav--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
})
