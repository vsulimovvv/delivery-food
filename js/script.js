const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

const toogleModal = (event) => {
  event.preventDefault();
  modal.classList.toggle('is-open');
};

cartButton.addEventListener('click', toogleModal);
close.addEventListener('click', toogleModal);

new WOW().init();