import { app, BrowserWindow } from 'electron';

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  // const indexPath = path.join(__dirname, '/dist/index.html');
  // win.loadURL(`file://${indexPath}`); 

  // win.loadURL(`http://localhost:3000/admin-templates/login`);

  // mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'));
  
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  console.log(__dirname)

  console.log('Loading React app...');

  // Open the DevTools (optional)
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});