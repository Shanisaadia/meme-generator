'use strict'
var gTxtFontFamily = 'impact';

// TODO: Add missing functions
// 1. Add new line.
// 2. Select font.
// 3. Share.

// User editor - All functions from the user editor container
// User editor: Switch line 
function switchLine() {
    var nextLineIdx = 0;
    if (gSelectedLineIdx + 1 < gMeme.lines.length) nextLineIdx = gSelectedLineIdx + 1;
    if (gMeme.lines[nextLineIdx].txt.length) {
        gMeme.selectedLineIdx = nextLineIdx;
        gSelectedLineIdx = nextLineIdx;
    } console.log('This is gCurrLineIdx:', gSelectedLineIdx);
}
//TODO: add validation if the line is inside or outside of the canvas
// User editor: Move Line down
function lineDown(val) {
    var currPosT = gMeme.lines[gSelectedLineIdx].y;
    var newPosY = currPosT - (-val);
    gMeme.lines[gSelectedLineIdx].y = newPosY;
    drawCanvas();
}
//TODO: add validation if the line is inside or outside of the canvas
// User editor: Move Line up
function lineUp(val) {
    var currPosT = gMeme.lines[gSelectedLineIdx].y;
    var newPosY = currPosT - val;
    gMeme.lines[gSelectedLineIdx].y = newPosY;
    drawCanvas();
}
// TODO - Add function: Add new line

// User editor: Delete text line
function deleteTxtLine() {
    gMeme.lines[gSelectedLineIdx].txt = '';
    drawCanvas();
}
// User editor: Increase font size
function increaseFontSise() {
    var currSize = gMeme.lines[gSelectedLineIdx].size;
    var newSize = currSize + 1;
    gMeme.lines[gSelectedLineIdx].size = newSize;
    drawCanvas();
}
// User editor: Decrease font size
function decreaseFontSise() {
    var currSize = gMeme.lines[gSelectedLineIdx].size;
    var newSize = currSize - 1;
    gMeme.lines[gSelectedLineIdx].size = newSize;
    drawCanvas();
}
// User editor: Align text to the left
function setLeft(val) {
    gMeme.lines[gSelectedLineIdx].align = val;
    drawCanvas();
}
// User editor: Align text to the center
function setCenter(val) {
    gMeme.lines[gSelectedLineIdx].align = val;
    drawCanvas();
}
// User editor: Align text to the right
function setRight(val) {
    gMeme.lines[gSelectedLineIdx].align = val;
    drawCanvas();
}
// TODO - Add function: Change font family

// User editor: Change text border/stroke
function changeTxtBorder(val) {
    gMeme.lines[gSelectedLineIdx].strokeColor = val;
    drawCanvas();
}
// User editor: Change text color
function changeTxtColor(val) {
    gMeme.lines[gSelectedLineIdx].fillColor = val;
    drawCanvas();
}
// TODO - Add function: Share

// TODO - Add function: Download
// In the controller
