const React = require('react');
const {Component} = React;
const {Link} = require('react-router');

class TitleScreen extends Component {
    render() {
        return (
            <div>
                <h1>Arrow Smashing Game</h1>
                <Link to="/select-style">Press Start</Link>
            </div>
        );
    }
}

module.exports = TitleScreen;