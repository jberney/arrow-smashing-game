const fs = require('fs');

const asgPath = `${process.env.HOME}/Documents/ArrowSmashingGame`;
const musicPath = `${asgPath}/Music`;
const songsPath = `${asgPath}/Songs`;
const videosPath = `${asgPath}/Videos`;

let videos;

module.exports = {
    getBanner(group, song) {
        return song
            ? `${songsPath}/${group}/${song}/${song}.png`
            : `${songsPath}/${group}/${group}.png`;
    },
    getBg(group, song) {
        return `${songsPath}/${group}/${song}/${song}-bg.png`;
    },
    getOgg(group, song) {
        return `${songsPath}/${group}/${song}/${song}.ogg`;
    },
    getSm(group, song) {
        return `${songsPath}/${group}/${song}/${song}.sm`;
    },
    getMusic(name) {
        return `${musicPath}/${name}.ogg`
    },
    getRandomVideo() {
        videos = videos || fs.readdirSync(videosPath)
                .filter(n => n.match(/\.mp4$/));
        const name = videos[Math.floor(Math.random() * videos.length)];
        return `${videosPath}/${name}`;
    }
}