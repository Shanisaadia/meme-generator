'use strict'

var gTxtAlign = 'start';
var gTxtColor = 'black';
var gTxtBorder = 'black';

// User editor - All functions from the user editor container

// TODO - Add function: move linu Up/Down

// TODO - Add function: add new line

// TODO - Add function: delete line

// TODO - Add function: Increase font size

// TODO - Add function: Decrease font size

// User editor: Align text to the left
function setLeft(start) {
    gTxtAlign = start;
    console.log('Change text align to:', gTxtAlign);
}

// User editor: Align text to the center
function setCenter(center) {
    gTxtAlign = center;
    console.log('Change text align to:', gTxtAlign);
}


// User editor: Align text to the right
function setRight(end) {
    gTxtAlign = end;
    console.log('Change text align to:', gTxtAlign);
}

// TODO - Add function: Change font family

// TODO - Add function: Change text border

function changeTxtBorder(elTxtBorder) {
    gTxtBorder = elTxtBorder;
    console.log('Change text border color to:', gTxtBorder);
}

// TODO - Add function: Change  color = fillStyle

function changeTxtColor(elTxtColor) {
    gTxtColor = elTxtColor;
    console.log('Change text color to:', gTxtColor);
}

// TODO - Add function: Share

// TODO - Add function: Download

function onClearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}