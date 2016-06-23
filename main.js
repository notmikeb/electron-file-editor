'use strict';

const electron = require('electron');

const app = electron.app;

app.on('window-all-closed', function() {
    app.quit();
});

app.on('ready', function() {

  let mainWindow = new electron.BrowserWindow({width: 800, height: 600});

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
