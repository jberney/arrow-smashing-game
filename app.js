const {app, BrowserWindow} = require('electron');

const props = {
    backgroundColor: '#223',
    fullscreen: true
};

app.on('ready', () => {
    new BrowserWindow(props)
        .loadURL(`file://${__dirname}/index.html`);
});

app.on('window-all-closed', app.quit);