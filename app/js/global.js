"use strict";

//Tilemap
class Sheet {
    constructor(src, locs) {
        this.loaded = false;
        this.src = src;
        this.map = undefined;
        this.locs = locs;

        this.load();
    };

    load = () => {
        let img = new Image();
        img.onload = () => {
            this.map = img;
            this.loaded = true;
        };

        img.src = `./art/tileMaps/testTileMap.png`;
    };
}

console.log(Sheet);