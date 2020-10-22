'use strict'

var gCanvas;
var gCtx;
var gMemes = [];
var gMeme;
var gImgs;
var gSelectedLineIdx;
var gSelectedImgUrl;


function createMeme(imgId) {
    console.log('Creating meme');
    var meme = {
        selectedImgId: imgId,
        selectedImgUrl: `img/meme-imgs/${imgId}.jpg`,
        selectedLineIdx: 0,
        lines: [
            {
                txt: "Add text here",
                size: 48,
                font: 'impact',
                align: 'start',
                fillColor: 'white',
                strokeColor: 'black',
                x: 175,
                y: 85,

            },
            {
                txt: "Add text here",
                size: 48,
                font: 'impact',
                align: 'start',
                fillColor: 'white',
                strokeColor: 'black',
                x: 175,
                y: 600,
            }
        ]
    }
    gMemes.push(meme);
    return meme;
}

function updateMeme(newTxt) {
    gMeme.lines[gSelectedLineIdx].txt = newTxt;
}

function updateMemeLine(x, y) {
    gMeme.lines[gSelectedLineIdx].x = x;
    gMeme.lines[gSelectedLineIdx].y = y;
}

function getLineTxt() {
    return gMeme.lines[gSelectedLineIdx].txt;
}

function getselectedLineIdx() {
    return gSelectedLineIdx;
}

function getLines() {
    return gMeme.lines;
}

function getMemeImgUrl() {
    return gSelectedImgUrl;
}
