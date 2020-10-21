'use strict'

var gCanvas;
var gCtx;
var gMemes = [];
var gMeme;
var gImgs;
var gLineId = 100;

function createMeme(imgId, id) {
    console.log('Creating meme');
    var meme = {
        selectedImgId: imgId,
        selectedImgUrl: 'img/meme-imgs/1.jpg',
        selectedLineIdx: 0,
        lines: [
            {
                gLineId: id,
                txt: "First meme",
                size: 20,
                align: 'left',
                color: 'red'
            }
        ]
    }
    gLineId++;
    gMemes.push(meme);
    return meme;
}

function updateMeme(text_title) {
    gMeme.lines[0].txt = text_title;    
}

function updateMemeLine(x, y) {
    gMeme.lines[0].x = x;    
    gMeme.lines[0].y = y;    
}