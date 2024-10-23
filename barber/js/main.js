const stickyElement = document.getElementById('container-h1');
const workElement = document.getElementById('head-h1');

const sentinel = document.createElement('div');
stickyElement.before(sentinel);

let options = {
  // root: document.querySelector("#scrollArea"),
  rootMargin: '4px 0px 0px 0px',
  threshold: 1.0,
};

new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting) {
    // console.log('Sticky-active!');
    workElement.style.fontSize = '1.5em';
  } else {
    workElement.style.fontSize = '4em';
  }
}, options ).observe(sentinel);

// for h2 services

const stickyElement2 = document.getElementById('container-h2-services');
const workElement2 = document.getElementById('head-h2-services');

const sentinel2 = document.createElement('div');
stickyElement2.before(sentinel2);

new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting) {
    // console.log('Sticky-active!');
    workElement2.style.fontSize = '1.5em';
  } else {
    workElement2.style.fontSize = '3em';
  }
}, options ).observe(sentinel2);

// for h2 protfoliio

const stickyElement3 = document.getElementById('container-h2-portfolio');
const workElement3 = document.getElementById('head-h2-portfolio');

const sentinel3 = document.createElement('div');
stickyElement3.before(sentinel3);

new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting) {
    // console.log('Sticky-active!');
    workElement3.style.fontSize = '1.5em';
  } else {
    workElement3.style.fontSize = '3em';
  }
}, options ).observe(sentinel3);