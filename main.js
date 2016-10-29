const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    new BrowserWindow({width: 800, height: 600})
        .loadURL(`file://${__dirname}/index.html`);
});

app.on('window-all-closed', app.quit);