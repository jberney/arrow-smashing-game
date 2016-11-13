const React = require('react');
const {Component} = React;
const {hashHistory, Router, Route} = require('react-router');

const TitleScreen = require('../screens/title-screen');
const SelectStyleScreen = require('../screens/select-style-screen');
const SelectMusicScreen = require('../screens/select-music-screen');
const PlayScreen = require('../screens/play-screen');

const COMPONENTS = {
    '/': TitleScreen,
    '/select-style/:style': SelectStyleScreen,
    '/select-music/:style(/:group(/:song))': SelectMusicScreen,
    '/play/:style/:group/:song': PlayScreen
};

class ScreenRouter extends Component {
    render() {
        const paths = Object.keys(COMPONENTS);
        const ROUTES = paths
            .map(path => {
                const component = COMPONENTS[path];
                const props = {key: path, path, component};
                return <Route {...props}></Route>;
            });
        return <Router history={hashHistory}>{ROUTES}</Router>;
    }
}

module.exports = ScreenRouter;