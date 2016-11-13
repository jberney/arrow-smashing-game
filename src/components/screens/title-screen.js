const React = require('react');
const {Component} = React;
const {Link} = require('react-router');

const PathHelper = require('../../files/path-helper');

class TitleScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: PathHelper.getRandomVideo()
        };
    }

    play() {
        document.getElementById('video-bg').play();
        document.getElementById('title-screen').style.opacity = 1;
        document.getElementById('title-screen').style.animation = 'fadein 1s';
    }

    render() {
        const {video} = this.state;
        const music = PathHelper.getMusic('ScreenTitleMenu music (loop)');

        return (
            <div id="title-screen">
                <div id="title-screen-title">
                    <div>
                        <span id="title-screen-title-arrow">Arrow</span>
                        <span
                            id="title-screen-title-smashing">Smashing</span>
                        <span id="title-screen-title-game">Game</span>
                    </div>
                </div>
                <div id="title-screen-press-start">
                    <Link to="/select-style" className>Press Start</Link>
                </div>
                <video id="video-bg"
                       src={video}
                       onCanPlay={this.play.bind(this)}
                       loop/>
                <audio id="title-screen-audio"
                       src={music}
                       autoPlay loop/>
            </div>
        );
    }
}

module.exports = TitleScreen;