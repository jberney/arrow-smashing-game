const React = require('react');
const {Component} = React;
const {Link} = require('react-router');

const ListHelper = require('../../files/list_helper');
const PathHelper = require('../../files/path_helper');
const SongWheel = require('../widgets/song_wheel');

class SelectMusicScreen extends Component {
    render() {
        const {params, params: {style}} = this.props;

        const groups = ListHelper.listGroups();
        const selectedGroup = params.group;

        let bannerPath, oggPath, selectedSong, songs;
        if (selectedGroup) {
            songs = ListHelper.listSongs(selectedGroup);
            songs.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
            selectedSong = params.song;

            bannerPath = PathHelper.getBanner(selectedGroup, selectedSong);
            oggPath = PathHelper.getOgg(selectedGroup, selectedSong);
        }

        const audioProps = {autoPlay: true, loop: true, src: oggPath};
        const songWheelProps = {groups, songs, style, selectedGroup, selectedSong};

        return (
            <div>
                <h1>Select Music ({style})</h1>
                {bannerPath && <img src={bannerPath}/>}
                {oggPath && <audio {...audioProps}></audio>}
                <ul style={{float: 'right'}}>
                    <SongWheel {...songWheelProps}/>
                </ul>
                <div><Link to="/">Exit</Link></div>
            </div>
        );
    }
}

module.exports = SelectMusicScreen;