'use strict'

function onClearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function toggleMenu() {
    var mainMenu = document.getElementById('mainMenu');
    console.log(mainMenu);
    mainMenu.classList.toggle('open');
}