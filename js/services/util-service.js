'use strict'

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function toggleMenu() {
    var mainMenu = document.getElementById('mainMenu');
    console.log(mainMenu);
    mainMenu.classList.toggle('open');
}

function toggleModal() {
    document.querySelector('.modal').classList.toggle('screen');
    document.querySelector('.box').classList.toggle('show');
}

function openModal() {
    document.querySelector('.modal-container').classList.remove('hide');        
  }
  function closeModal() {
    document.querySelector('.modal-container').classList.add('hide');        
  }