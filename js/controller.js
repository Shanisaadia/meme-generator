'use strict'
var text_title = "Add text here";
var gCanvas = document.querySelector('#my-canvas');
var gCtx = gCanvas.getContext('2d');
var gImg = new Image();

window.addEventListener('load', drawPlaceholder)

function onInit() {
    _createImages();
    renderImages();
}

// Render img gallery
function renderImages() {
    var images = getImages();
    var strHTML = images.map(function (img) {
        return `
        <div
            class="card card-${img.id}"
            onclick="onImgClick(${img.id})">
            <img src="./img/meme-imgs/${img.id}.jpg">
        </div>
        `
    })
    document.querySelector('.grid-container-gallery').innerHTML = strHTML.join('');
}

function onImgClick(imgId) {
    gMeme = createMeme(imgId);
    console.log('New meme was created');
    console.log('gMeme:', gMeme);

    // TODO: Write it better!
    var currImg = getImgkById(imgId);
    var currImgUrl = currImg.url;
    drawPlaceholder(currImgUrl);
}


// TODO: Change the position of the text
function drawPlaceholder(currImgUrl) {
    gImg.onload = function () {
        drawOverlay(gImg);
        drawText();
        dynamicText(gImg)
    };
    gImg.src = currImgUrl;
}

function drawOverlay(gImg) {
    gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height);
    gCtx.fillStyle = 'rgba(30, 144, 255, 0.2)';
    gCtx.fillRect(gCanvas.width / 5, gCanvas.height / 6, 400, 100);
}

function drawText() {
    gCtx.fillStyle = gTxtColor;
    gCtx.strokeStyle = gTxtBorder;
    gCtx.lineWidth = '4'
    gCtx.textBaseline = 'middle';
    gCtx.font = "50px 'Montserrat'";
    gCtx.textAlign = gTxtAlign;
    gCtx.fillText(text_title, gCanvas.width / 5, gCanvas.height / 6);
    gCtx.strokeText(text_title, gCanvas.width / 5, gCanvas.height / 6);
}

function dynamicText(gImg) {
    document.getElementById('name').addEventListener('keyup', function () {
        gCtx.clearRect(gCanvas.width / 5, gCanvas.height / 6, 400, 100);
        drawOverlay(gImg);
        drawText();
        text_title = this.value;
        gCtx.fillText(text_title, gCanvas.width / 5, gCanvas.height / 6);
        gCtx.strokeText(text_title, gCanvas.width / 5, gCanvas.height / 6);
        updateMeme(text_title);
    });
}


// User editor - All functions from the user editor container

// TODO - Add function: move linu Up/Down

// TODO - Add function: add new line

// TODO - Add function: delete line

// TODO - Add function: Increase font size

// TODO - Add function: Decrease font size

// User editor: Align text to the left
function onSetLeft(start) {
    setLeft(start);
}

// User editor: Align text to the center
function onSetCenter(center) {
    setCenter(center);
}

// User editor: Align text to the right
function onSetRight(end) {
    setRight(end);
}

// TODO - Add function: Change font family

// TODO - Add function: Change text border
function onChangeTxtBorder(ev) {
    var elTxtBorder = document.querySelector('input[name=border]').value;
    changeTxtBorder(elTxtBorder);
}

// TODO - Add function: Change  color = fillStyle
function onChangeTxtColor(ev) {
    var elTxtColor = document.querySelector('input[name=color]').value;
    changeTxtColor(elTxtColor);
}

// TODO - Add function: Share

// TODO - Add function: Download

function onClearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}