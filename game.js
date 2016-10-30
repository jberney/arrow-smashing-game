require('react');
const ReactDOM = require('react-dom');

const element = (
    <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
);
const root = document.getElementById('root');

ReactDOM.render(element, root);