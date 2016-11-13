const React = require('react');
const {Component} = React;
const {Link} = require('react-router');

const PathHelper = require('../../files/path-helper');

class SelectStyleScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: PathHelper.getRandomVideo()
        };
    }

    play() {
        document.getElementById('video-bg').play();
        document.getElementById('select-style-screen').style.opacity = 1;
        document.getElementById('select-style-screen').style.animation = 'fadein 1s';
    }

    render() {
        const {video} = this.state;
        const music = PathHelper.getMusic('_common menu music (loop)');

        return (
            <div id="select-style-screen">
                <h1>Select Style</h1>
                <div id="styles">
                    <div><Link to="/select-music/singles">Singles</Link></div>
                    <div><Link to="/select-music/versus">Versus</Link></div>
                    <div><Link to="/select-music/doubles">Doubles</Link></div>
                </div>
                <video id="video-bg"
                       src={video}
                       onPlay={this.play.bind(this)}
                       autoPlay loop/>
                <audio id="select-style-screen-audio"
                       src={music}
                       autoPlay loop/>
            </div>
        );
    }
}

module.exports = SelectStyleScreen;