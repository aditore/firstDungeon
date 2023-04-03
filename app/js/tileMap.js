"use strict";

const tiles = {
    //Start map as undefined before load
    map: undefined,
    //Set tile size to 32
    tileSize: 32,

    //Find tile map png file
    load: () => {
        let img = new Image();
        img.onload = () => {
            tiles.map = img;
        };
        img.src = "./art/tileMaps/testTileMap.png";
    },

    //Tiles from map
    grass: {
        solid: false,
        pos: {
            x: 1,
            y: 0
        },
        id: 0
    },

    dirt: {
        solid: false,
        pos: {
            x: 2,
            y: 0
        },
        id: 1
    },

    water: {
        solid: true,
        pos: {
            x: 3,
            y: 0
        },
        id: 2
    }
}

console.log(tiles);
tiles.load();

const rooms = {
    test: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
}

console.log(rooms);