'use strict'

var gCanvas;
var gCtx;
var gMemes = [];
var gMeme;
var gImgs;

function createMeme(imgId) {
    console.log('Creating meme');
    var meme = {
        selectedImgId: imgId,
        selectedImgUrl: 'img/meme-imgs/1.jpg',
        selectedLineIdx: 0,
        lines: [
            {
                txt: "First meme",
                size: 20,
                align: 'left',
                color: 'red'
            }
        ]
    }
    gMemes.push(meme);
    return meme;
}

function updateMeme(text_title) {
    gMeme.lines[0].txt = text_title;    
}
