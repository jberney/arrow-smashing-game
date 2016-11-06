const fs = require('fs');
const React = require('react');
const {Component} = React;
const {Link} = require('react-router');

const ListHelper = require('../../files/list-helper');
const PathHelper = require('../../files/path-helper');
const SmParser = require('../../parsers/sm-parser');
const SongWheel = require('../widgets/song-wheel');

const smCache = {};

class SelectMusicScreen extends Component {
    render() {
        const {params, params: {style}} = this.props;

        const groups = ListHelper.listGroups();
        const selectedGroup = params.group;

        let bannerPath, oggPath, selectedSong, songs, bpm, sampleStart;
        if (selectedGroup) {
            songs = ListHelper.listSongs(selectedGroup);
            songs.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
            selectedSong = params.song;

            if (selectedSong) {
                bannerPath = PathHelper.getBanner(selectedGroup, selectedSong);
                oggPath = PathHelper.getOgg(selectedGroup, selectedSong);
                const smPath = PathHelper.getSm(selectedGroup, selectedSong);

                const sm = smCache[smPath] || SmParser.parse(fs.readFileSync(smPath));
                smCache[smPath] = sm;
                const bpms = sm.BPMS;
                bpm = Math.round(bpms.split(',').pop().split('=')[1]);
                sampleStart = +sm.SAMPLESTART;
            }
        }

        const bannerStyle = {
            backgroundImage: `url("${bannerPath}")`,
            width: '48%',
            paddingTop: '15%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        };
        const audioProps = {autoPlay: true, loop: true, src: oggPath};
        const songWheelProps = {
            groups,
            songs,
            style,
            selectedGroup,
            selectedSong
        };

        return (
            <div>
                <ul style={{float: 'right', width: '50%'}}>
                    <SongWheel {...songWheelProps}/>
                </ul>
                <h1>Select Music</h1>
                <h2>Stage: 1st</h2>
                <h2>Speed: {bpm ? `${bpm}bpm` : '-'}</h2>
                {bannerPath && <div style={bannerStyle}/>}
                {oggPath &&
                <audio id="sample" {...audioProps}
                       onPlaying={() => {
                           const audio = document.getElementById('sample');
                           audio.currentTime > sampleStart || (audio.currentTime = sampleStart);
                       }}/>
                }
                <div><Link to="/">Exit</Link></div>
            </div>
        );
    }
}

module.exports = SelectMusicScreen;