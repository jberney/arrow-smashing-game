const fs = require('fs');

const songsPath = `${process.env.HOME}/Documents/ArrowSmashingGame/Songs`;

module.exports = {
    getBanner(group, song) {
        return song
            ? `${songsPath}/${group}/${song}/${song}.png`
            : `${songsPath}/${group}/${group}.png`;
    },
    getOgg(group, song) {
        return `${songsPath}/${group}/${song}/${song}.ogg`;
    }
}