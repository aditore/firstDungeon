/* Creating CANVAS for HTML */

var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext("2d");

//Canvas size for tiles
const tW = 320;
const tH = 320;

function canvasSize () {
    canvas.width = tW;
    canvas.height = tH;
}

canvasSize();

const nums = new Sheet("spritesheet_nums", {
	0: { x: 0, y: 0 },
	1: { x: 1, y: 0 },
	2: { x: 2, y: 0 },
	3: { x: 3, y: 0 },
});

function renderMap(x, y, number) {
    x = Math.round(x);
    y = Math.round(y);

    let numArray = number.toString().split("");

    for (let i = 0; i < numArray.length; i++) {
        ctx.beginPath();
        ctx.drawImage(
            nums.map,

            Math.round(x + i * 32 + i),
            Math.round(y),
            32,
            32
        );

        ctx.closePath();
    }
}

world.render(ctx);