'use strict'
var text_title = "Add text here";
var gCanvas = document.querySelector('#my-canvas');
var gCtx = gCanvas.getContext('2d');
var gImg = new Image();
var x;
var y;

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
    gMeme = createMeme(imgId, gLineId);
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
    gCtx.fillRect(gCanvas.width / 6, gCanvas.height / 14, 500, 100);
    x = (gCanvas.width / 6);
    y = (gCanvas.width / 14);
    // updateMemeLine(x, y);
}

function drawText() {
    gCtx.fillStyle = gTxtColor;
    gCtx.strokeStyle = gTxtBorder;
    gCtx.lineWidth = '2'
    gCtx.textBaseline = 'middle';
    gCtx.font = getFontPref();
    gCtx.textAlign = gTxtAlign;
    gCtx.fillText(text_title, gCanvas.width / 4, gCanvas.height / 7);
    gCtx.strokeText(text_title, gCanvas.width / 4, gCanvas.height / 7);
}

function dynamicText(gImg) {
    document.getElementById('name').addEventListener('keyup', function () {
        gCtx.clearRect(gCanvas.width / 6, gCanvas.height / 14, 500, 100);
        drawOverlay(gImg);
        drawText();
        text_title = this.value;
        gCtx.fillText(text_title, gCanvas.width / 4, gCanvas.height / 7);
        gCtx.strokeText(text_title, gCanvas.width / 4, gCanvas.height / 7);
        updateMeme(text_title);
    });
}


// User editor - All functions from the user editor container

// TODO - Add function: move linu Up/Down

// TODO - Add function: add new line

// TODO - Add function: delete line

// TODO - Add function: Increase font size
function onIncreaseTxtSize(){
    console.log('gTxtSize before:', gTxtSize);
    gTxtSize++;
    console.log('gTxtSize after:', gTxtSize);
    return gTxtSize;
}

// TODO - Add function: Decrease font size
function onDecreaseTxtSize(){
    console.log('gTxtSize before:', gTxtSize);
    gTxtSize--;
    console.log('gTxtSize after:', gTxtSize);
    return gTxtSize;
}

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
    // var elTxtBorder = document.querySelector('input[name=border]').value;
    changeTxtBorder(document.querySelector('input[name=border]').value);
}

// TODO - Add function: Change color = fillStyle
function onChangeTxtColor(ev) {
    // var elTxtColor = document.querySelector('input[name=color]').value;
    changeTxtColor(document.querySelector('input[name=color]').value);
}

// TODO - Add function: Share

// TODO - Add function: Download

function onDownloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'img.jpg';
}


// Handle canvas click events
// function onCanvasClicked(ev) {
//     const { offsetX, offsetY } = ev;
//     const { clientX, clientY } = ev;
//     console.log(offsetX, offsetY, ev);
//     // console.log(clientX, clientY);

// var res = gCanvas.getBoundingClientRect();
// console.log(res);



//     const clickedLine = gMemes.find(meme => {
//         return offsetX > meme.x && offsetX < meme.x + gBarWidth && offsetY > meme.y
//     })
//     console.log(clickedLine);
// }