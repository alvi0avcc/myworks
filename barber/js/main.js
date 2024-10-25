const stickyElement = document.getElementById('container-h1');
const workElement = document.querySelector('.head-h1');

const sentinel = document.createElement('div');
stickyElement.before(sentinel);

let options = {
  // root: document.querySelector("#scrollArea"),
  rootMargin: '4px 0px 0px 0px',
  threshold: 1.0,
};

new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting) {
    workElement.style.fontSize = '1.5em';
  } else {
    workElement.style.fontSize = '';
  }
}, options ).observe(sentinel);

// for h2 services

const stickyElement2 = document.getElementById('container-h2-services');
const workElement2 = document.getElementById('head-h2-services');

const sentinel2 = document.createElement('div');
stickyElement2.before(sentinel2);

new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting) {
    workElement2.style.fontSize = '1.5em';
  } else {
    workElement2.style.fontSize = '';
  }
}, options ).observe(sentinel2);

// for h2 protfoliio

const stickyElement3 = document.getElementById('container-h2-portfolio');
const workElement3 = document.getElementById('head-h2-portfolio');

const sentinel3 = document.createElement('div');
stickyElement3.before(sentinel3);

new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting) {
    workElement3.style.fontSize = '1.5em';
  } else {
    workElement3.style.fontSize = '';
  }
}, options ).observe(sentinel3);

// burger-menu

const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.nav');

burger.addEventListener('click', ()=>{
  menu.classList.toggle('burger-menu-active');
  burger.classList.toggle('burger-open');
});

document.addEventListener('scroll', ()=>{
  menu.classList.remove('burger-menu-active');
  burger.classList.remove('burger-open');
})