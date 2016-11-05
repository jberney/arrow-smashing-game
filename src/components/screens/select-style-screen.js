const React = require('react');
const {Component} = React;
const {Link} = require('react-router');

class SelectStyleScreen extends Component {
    render() {
        return (
            <div>
                <h1>Select Style</h1>
                <div><Link to="/select-music/singles">Singles</Link></div>
                <div><Link to="/select-music/versus">Versus</Link></div>
                <div><Link to="/select-music/doubles">Doubles</Link></div>
                <div><Link to="/">Exit</Link></div>
            </div>
        );
    }
}

module.exports = SelectStyleScreen;