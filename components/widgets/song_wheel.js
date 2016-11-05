const React = require('react');
const {Component} = React;
const {Link} = require('react-router');

class SongWheel extends Component {
    render() {
        const {groups, songs, style, selectedGroup, selectedSong} = this.props;

        const songWheel = groups.map(group => (
            <li key={group}>
                {group !== selectedGroup
                    ? <Link to={`/select-music/${style}/${group}`}>{group}</Link>
                    : <Link to={`/select-music/${style}`}>{group}</Link>}
                {selectedGroup === group && <ul>
                    {songs.map(song => (
                        <li key={song}>
                            {song !== selectedSong
                                ? <Link to={`/select-music/${style}/${group}/${song}`}>{song}</Link>
                                : <b>{song}</b>}
                        </li>
                    ))}
                </ul>}
            </li>
        ));

        return <div>{songWheel}</div>;
    }
}

module.exports = SongWheel;