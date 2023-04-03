"use strict";

class Tile {
    constructor(x, y) {
        //tile position
        this.x = x;
        this.y = y;
    }

    render(ctx) {
        ctx.beginPath();

        ctx.drawImage(
            tiles.map,
            this.data.pos.x * 32,
            this.data.pos.y * 32
        )

        ctx.closePath();
    }
}

console.log(tiles);



class World {
    constructor() {
        this.rooms = [];
        this.globalTiles = [];
    }

    createRoom(x, y) {
        let room = new Room(x, y, true, null);
        this.rooms.push(room);
    }

    getRoom(x, y) {
        return this.rooms[0];
    }
    
}

let world = new World();

