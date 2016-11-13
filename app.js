const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    new BrowserWindow({backgroundColor: '#000', fullscreen: true})
        .loadURL(`file://${__dirname}/index.html`);
});

app.on('window-all-closed', app.quit);