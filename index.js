const electron = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({ frame: false, resizable: false })
    mainWindow.loadURL(`file://${__dirname}/public/index.html`);
    mainWindow.maximize();
});