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
        this.setState({show: true});
        document.getElementById('select-style-screen-audio').play();
    }

    render() {
        const {show, video} = this.state;
        const music = PathHelper.getMusic('_common menu music (loop)');
        return (
            <div style={{display: show ? 'block' : 'none'}}>
                <h1>Select Style</h1>
                <div><Link to="/select-music/singles">Singles</Link></div>
                <div><Link to="/select-music/versus">Versus</Link></div>
                <div><Link to="/select-music/doubles">Doubles</Link></div>
                <div><Link to="/">Exit</Link></div>
                <video id="title-screen-bg"
                       src={video}
                       onPlay={this.play.bind(this)}
                       autoPlay loop/>
                <audio id="select-style-screen-audio"
                       src={music}
                       loop/>
            </div>
        );
    }
}

module.exports = SelectStyleScreen;