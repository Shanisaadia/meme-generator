'use strict'
var gCanvas = document.querySelector('#my-canvas');
var gCtx = gCanvas.getContext('2d');
var gImg = new Image();
var elTxt = document.getElementById('Line-txt');

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
    gSelectedLineIdx = gMeme.selectedLineIdx;
    gSelectedImgUrl = gMeme.electedImgUrl;
    // console.log('New meme was created');
    // console.log('gMeme:', gMeme);
    drawCanvas();
}

function drawCanvas() {
    clearCanvas();
    gImg.src = gMeme.selectedImgUrl;
    gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height);
    drawLines();
}

function drawLines() {
    const lines = getLines();
    lines.forEach((line, idx) => drawTxt(line, idx));
}

function drawTxt(line) {
    if (!line.txt) return;

    gCtx.fillStyle = line.fillColor;
    gCtx.strokeStyle = line.strokeColor;
    gCtx.font = `${line.size}px ${line.font}`;
    gCtx.textAlign = line.align;
    gCtx.lineWidth = '2'
    gCtx.textBaseline = 'middle';

    gCtx.fillText(line.txt, line.x, line.y);
    gCtx.strokeText(line.txt, line.x, line.y);
    gCtx.save();
}

// --------- User editor - All functions from the user editor container ---------

// User editor: Change text
function onChangeTxt(elTxt) {
    var newTxt = elTxt.value;
    console.log(newTxt);
    updateMeme(newTxt);
    drawCanvas();
}
// User editor: Switch line 
function onSwitchLine() {
    switchLine();
}
// User editor: Move Line down
function onLineDown(val) {
    lineDown(val);
}
// User editor: Move Line up
function onLineUp(val) {
    lineUp(val);
}
// User editor: Add new line
function onAddLine() {
    addNewLine();
}
// User editor: Delete text line
function onDeleteTxtLine() {
    deleteTxtLine();
}
// User editor: Increase font size
function onIncreaseTxtSize() {
    increaseFontSise();
}
// User editor: Decrease font size
function onDecreaseTxtSize() {
    decreaseFontSise();
}
// User editor: Align text to the left
function onSetLeft(val) {
    setLeft(val);
}
// User editor: Align text to the center
function onSetCenter(val) {
    setCenter(val);
}
// User editor: Align text to the right
function onSetRight(val) {
    setRight(val);
}
// User editor: Change font
function onSetFont(font) {
    setFont(font);
}    
// User editor: Change text border/stroke
function onChangeTxtBorder(ev) {
    changeTxtBorder(document.querySelector('input[name=border]').value);
}
// User editor: Change text color
function onChangeTxtColor(ev) {
    changeTxtColor(document.querySelector('input[name=color]').value);
}
// TODO - Add function: Share

// User editor: download img
function onDownloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'img.jpg';
}