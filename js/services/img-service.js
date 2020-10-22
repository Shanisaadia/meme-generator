'use strict'

var gImgs;

function _createImg(id, url, keyword) {
    return {
        id: id,
        url: url,
        keyword: keyword,
        // keyword: ['happy', 'sad']
    }
}

// TODO: Change this function to a loop functionor anything else..
function _createImages() {
    var images = []
    if (!images || !images.length) {
        images.push(_createImg(1, 'img/meme-imgs/1.jpg', 'happy'));
        images.push(_createImg(2, 'img/meme-imgs/2.jpg', 'happy'));
        images.push(_createImg(3, 'img/meme-imgs/3.jpg', 'happy'));
        images.push(_createImg(4, 'img/meme-imgs/4.jpg', 'happy'));
        images.push(_createImg(5, 'img/meme-imgs/5.jpg', 'happy'));
        images.push(_createImg(6, 'img/meme-imgs/6.jpg', 'happy'));
        images.push(_createImg(7, 'img/meme-imgs/7.jpg', 'happy'));
        images.push(_createImg(8, 'img/meme-imgs/8.jpg', 'happy'));
        images.push(_createImg(9, 'img/meme-imgs/9.jpg', 'happy'));
        images.push(_createImg(10, 'img/meme-imgs/10.jpg', 'happy'));
        images.push(_createImg(11, 'img/meme-imgs/11.jpg', 'happy'));
        images.push(_createImg(12, 'img/meme-imgs/12.jpg', 'happy'));
        images.push(_createImg(13, 'img/meme-imgs/13.jpg', 'happy'));
        images.push(_createImg(14, 'img/meme-imgs/14.jpg', 'happy'));
        images.push(_createImg(15, 'img/meme-imgs/15.jpg', 'happy'));
        images.push(_createImg(16, 'img/meme-imgs/16.jpg', 'happy'));
        images.push(_createImg(17, 'img/meme-imgs/17.jpg', 'happy'));
        images.push(_createImg(18, 'img/meme-imgs/18.jpg', 'happy'));
    }
    gImgs = images;
}

function getImages() {
    return gImgs;
}

function getImgkById(imgId) {
    var img = gImgs.find(function (img) {
        return imgId === img.id
    })
    return img;
}