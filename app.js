const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    new BrowserWindow({width: 1280, height: 720})
        .loadURL(`file://${__dirname}/index.html`);
});

app.on('window-all-closed', app.quit);