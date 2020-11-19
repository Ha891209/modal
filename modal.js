"use strict";

let modalContent = document.querySelector('#modal__content');
let hider = document.querySelector('#hider');
let initBtn = document.querySelector('#init-button');

initBtn.addEventListener('click', showModal);

function showModal() {
    modalContent.setAttribute('class', 'modal__content--visible')
    hider.setAttribute('class', 'hider--visible')
}

function hideModal() {
    modalContent.setAttribute('class', 'modal__content--hidden')
    hider.setAttribute('class', 'hider--hidden')
}


window.addEventListener('click', function (ev){
    if (ev.target == modal) {
        modal.setAttribute('class', 'modal');
    }
});