// import { app, BrowserWindow } from 'electron';

// import { fileURLToPath } from 'url';
// import path from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// function createWindow() {
//   const win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: true,
//       contextIsolation: false
//     },
//   });

//   const indexPath = path.join(__dirname, './dist/index.html');
//   win.loadURL(`file://${indexPath}`);

//   console.log(indexPath);


//   // win.loadURL(`http://localhost:3000/admin-templates/login`)
//   console.log('Loading React app...');

//   // Open the DevTools (optional)
//   // win.webContents.openDevTools();
// }

// app.whenReady().then(createWindow);

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// app.on('activate', () => {
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });









import { app, BrowserWindow } from 'electron';
// import path from 'path';
import url from 'url';

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
  });

  // Load the index.html from the dist folder
  // mainWindow.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, '../dist/index.html'),
  //     protocol: 'file:',
  //     slashes: true,
  //   })
  // );


  win.loadURL(`http://localhost:3000/admin-templates/login`)

  // Open the DevTools (optional)
  // mainWindow.webContents.openDevTools();
}

// Called when Electron has finished initialization and is ready to create browser windows.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
