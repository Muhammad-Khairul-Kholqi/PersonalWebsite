// script slider
const slider = document.querySelector('.slider-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('grabbing');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('grabbing');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('grabbing');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

const scrollContainer = document.querySelector('.slider-container');

scrollContainer.addEventListener('wheel', (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
});

const logo = document.querySelector('.logo-img');

function setBackgroundToWhite() {
    logo.src = "./assets/logo-black.png"; 
}

function setBackgroundToBlack() {
    logo.src = "./assets/logo-white.png"; 
}

const body = document.body;
const logoContainer = document.getElementById('logoContainer');

body.addEventListener('mouseover', function() {
    if (window.getComputedStyle(body).backgroundColor === 'rgb(255, 255, 255)') {
        setBackgroundToWhite(); 
    } else {
        setBackgroundToBlack();
    }
});

// js hamburger menu
const navbarNav = document.querySelector('.navbar-nav-link');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
























// script dark background
const darkIcon = document.getElementById('dark');
const lightIcon = document.getElementById('light');

const fullName = document.getElementsByClassName('fullName')

darkIcon.addEventListener('click', function() {
  darkIcon.classList.add('hidden');
  lightIcon.classList.remove('hidden');
  document.body.classList.remove('bg-white');
  document.body.classList.add('bg-black');
});

lightIcon.addEventListener('click', function() {
  lightIcon.classList.add('hidden');
  darkIcon.classList.remove('hidden');
  document.body.classList.remove('bg-black');
  document.body.classList.add('bg-white');
});
