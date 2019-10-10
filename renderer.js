const ElectronTitlebarWindows = require('electron-titlebar-windows');

const titlebar = new ElectronTitlebarWindows({});
const contextElement = document.querySelector('#titlebarRegion');
titlebar.appendTo(contextElement);

console.log('renderer')