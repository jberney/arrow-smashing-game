const React = require('react');
const {Component} = React;
const {Link} = require('react-router');

const PathHelper = require('../../files/path-helper');

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}

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
        const {style: selectedStyle} = this.props.params;
        const {video} = this.state;
        const music = PathHelper.getMusic('_common menu music (loop)');

        const styles = ['singles', 'versus', 'doubles']
            .map(style => {
                const text = capitalize(style);
                let href, className;

                if (style === selectedStyle) {
                    href = `/select-music/${style}`;
                    className = 'selected';
                } else {
                    href = `/select-style/${style}`;
                    className = '';
                }

                return (
                    <Link to={href} className={className} key={style}>
                        {text}
                    </Link>
                );
            });

        return (
            <div id="select-style-screen">
                <h1>Select Style</h1>
                <div id="styles">
                    {styles}
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