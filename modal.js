const openButton = document.querySelector('.getModalBtn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const closeButton = document.querySelector('.closebtn');

const giveClassFunction = () => modal.setAttribute('class', 'modal showModal');
const takeAwayClassFunction = () => modal.setAttribute('class', 'modal');

openButton.addEventListener('click', giveClassFunction);
closeModal.addEventListener('click', takeAwayClassFunction);
closeButton.addEventListener('click', takeAwayClassFunction);

window.addEventListener('click', function (ev){
    if (ev.target == modal) {
        modal.setAttribute('class', 'modal');
    }
});