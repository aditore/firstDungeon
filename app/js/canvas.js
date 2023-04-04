/**
* @type HTMLCanvasElement
*/

const canvas = document.getElementById("canvas");
const guide = document.getElementById("guide");
const colorInput = document.getElementById("colorInput");
const toggleGuide = document.getElementById("toggleGuide");
const clearButton = document.getElementById("clearButton");
const ctx = canvas.getContext("2d");

const CELL_SIDE_COUNT = 5;
const cellPixelLength = canvas.width / CELL_SIDE_COUNT;
const colorHistory = {};

// Set default color
colorInput.value = "#009578";

// Initialize the canvas background
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, canvas.width, canvas.height); 

function handleCanvasMousedown(e) {

}

function handleClearButtonClick() {

}

function handleToggleGuideChange() {

}

function fillCell(cellX, cellY) {

}

canvas.addEventListener("mousedown", handleCanvasMousedown);
clearButton.addEventListener("click", handleClearButtonClick);
toggleGuide.addEventListener("change", handleToggleGuideChange);