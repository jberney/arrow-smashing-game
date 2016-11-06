const React = require('react');
const {Component} = React;
const {Link} = require('react-router');

const PathHelper = require('../../files/path-helper');

function step(timestamp) {
    const audio = document.getElementById('audio');
    if (audio && audio.duration > 0 && !audio.paused) {
        requestAnimationFrame(step);
    }
}

class PlayScreen extends Component {
    render() {
        const {style, group, song} = this.props.params;

        const bgPath = PathHelper.getBg(group, song);
        const oggPath = PathHelper.getOgg(group, song);

        const audioProps = {autoPlay: true, src: oggPath};

        return (
            <div style={{
                backgroundImage: `url("${bgPath}")`,
                backgroundSize: '100% 100%',
                minHeight: '100%',
                width: '100%',
                height: 'auto',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1
            }}>
                <audio id="audio" {...audioProps}
                       onPlaying={() => requestAnimationFrame(step)}/>
                <Link to={`/select-music/${style}/${group}/${song}`}>Next</Link>
            </div>
        )
    }
}

module.exports = PlayScreen;