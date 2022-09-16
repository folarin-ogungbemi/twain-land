// Wait for the DOM to finish loading
// open a dialog box at the click of hero explore button

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn--open').onclick = function () {
        document.querySelector('#hero__modal').showModal();
    };
});