const fs = require('fs');

const songsPath = `${process.env.HOME}/Documents/ArrowSmashingGame/Songs`;

module.exports = {
    listGroups() {
        return fs
            .readdirSync(songsPath)
            .filter(name => name.indexOf('.') !== 0);
    },
    listSongs(group) {
        const groupPath = `${songsPath}/${group}`;
        return fs
            .readdirSync(groupPath)
            .filter(song => song.indexOf('.') !== 0)
            .filter(song => fs.statSync(`${groupPath}/${song}`).isDirectory());
    }
}