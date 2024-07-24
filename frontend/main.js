
import { app, BrowserWindow } from 'electron';
// import { fileURLToPath } from 'url';
import path from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
    },
  });

  const indexPath = path.join(__dirname, 'index.html');
  win.loadURL(`file://${indexPath}`); // Replace with your React app URL

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