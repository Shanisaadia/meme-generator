'use strict'
var line;

// --------- User editor - All functions from the user editor container ---------

// TODO: Add missing functions (Share).

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
    line = getLine();
    var currPosY = line.y;
    var newPosY = currPosY - (-val);
    line.y = newPosY;
    drawCanvas();
}
//TODO: add validation if the line is inside or outside of the canvas
// User editor: Move Line up
function lineUp(val) {
    line = getLine();
    var currPosY = line.y;
    var newPosY = currPosY - val;
    line.y = newPosY;
    drawCanvas();
}
// TODO - Add function: Add new line
function addNewLine() {
    createLine();
    drawCanvas();
}

// User editor: Delete text line
function deleteTxtLine() {
    line = getLine();
    line.txt = '';
    drawCanvas();
}
// User editor: Increase font size
function increaseFontSise() {
    line = getLine();
    var currSize = line.size;
    var newSize = currSize + 1;
    line.size = newSize;
    drawCanvas();
}
// User editor: Decrease font size
function decreaseFontSise() {
    line = getLine();
    var currSize = line.size;
    var newSize = currSize - 1;
    line.size = newSize;
    drawCanvas();
}
// User editor: Align text to the left
function setLeft(val) {
    line = getLine();
    line.align = val;
    drawCanvas();
}
// User editor: Align text to the center
function setCenter(val) {
    line = getLine();
    line.align = val;
    drawCanvas();
}
// User editor: Align text to the right
function setRight(val) {
    line = getLine();
    line.align = val;
    drawCanvas();
}
// User editor: Change font
function setFont(font) {
    line = getLine();
    line.font = font;
    drawCanvas();
}
// User editor: Change text border/stroke
function changeTxtBorder(val) {
    line = getLine();
    line.strokeColor = val;
    drawCanvas();
}
// User editor: Change text color
function changeTxtColor(val) {
    line = getLine();
    line.fillColor = val;
    drawCanvas();
}

// TODO - Add function: Share

// TODO - Add function: Download
// In the controller
