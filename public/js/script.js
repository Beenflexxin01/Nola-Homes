'use strict';
const btNav = document.querySelector('.btn-mobile-nav');
const navHeader = document.querySelector('.main-header');
// const mainNav = document.querySelector(".main-nav");
// const mainHeader = document.querySelector(".main-header");

btNav.addEventListener('click', function () {
  navHeader.classList.toggle('nav-open');
});
