"use strict"

const cardButton = document.querySelector("#card-button");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");

cardButton.addEventListener('click', toggleModal);

modalClose.addEventListener('click', toggleModal);

 function toggleModal() {
 	modal.classList.toggle('is-open');
 }

 new WOW().init();