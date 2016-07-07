"use strict";

const app = require('app');
const BrowserWindow = require('browser-window');

let mainWindow = null;

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 720,
    "title-bar-style": 'hidden'
  });

  // 加载本地 html 文件
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

});
