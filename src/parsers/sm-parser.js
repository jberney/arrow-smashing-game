const regexp = /#([A-Z]+):\s*([^;]+);[^#]/g;

module.exports = {
    parse(str) {
        const song = {};
        let match;
        while ((match = regexp.exec(str)) !== null) {
            const [key, value] = match.slice(1);
            if (!song[key]) {
                song[key] = value;
            } else {
                if (!Array.isArray(song[key])) {
                    song[key] = [song[key]];
                }
                song[key].push(value);
            }
        }
        return song;
    }
};