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
        this.setState({show: true});

        document.getElementById('title-screen-audio').play();
    }

    render() {
        const {show, video} = this.state;
        const music = PathHelper.getMusic('ScreenTitleMenu music (loop)');

        return (
            <div id="title-screen" style={{display: show ? 'block' : 'none'}}>
                <h1>
                    <span id="title-screen-title-arrow">Arrow</span>
                    <span id="title-screen-title-smashing">Smashing</span>
                    <span id="title-screen-title-game">Game</span>
                </h1>
                <div id="title-screen-press-start">
                    <Link to="/select-style" className>Press Start</Link>
                </div>
                <video id="title-screen-bg"
                       src={video}
                       onPlay={this.play.bind(this)}
                       autoPlay loop/>
                <audio id="title-screen-audio"
                       src={music}
                       loop/>
            </div>
        );
    }
}

module.exports = TitleScreen;