const { app, BrowserWindow, shell, session } = require('electron');

const APP_URL = 'https://ezexchange.pythonanywhere.com/';
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 850,
    minWidth: 760,
    minHeight: 600,
    show: false,
    autoHideMenuBar: true,
    backgroundColor: '#090909',
    title: 'ezexchange',
    icon: __dirname + '/assets/icon.png',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true
    }
  });

  mainWindow.once('ready-to-show', () => mainWindow.show());

  // Keep ezexchange pages inside the app; open unrelated links externally.
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https://ezexchange.pythonanywhere.com/')) {
      return { action: 'allow' };
    }
    shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('https://ezexchange.pythonanywhere.com/')) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });

  mainWindow.loadURL(APP_URL);
  mainWindow.on('closed', () => { mainWindow = null; });
}

app.whenReady().then(() => {
  // Allow downloads through Chromium's normal download manager.
  session.defaultSession.on('will-download', (_event, item) => {
    item.setSaveDialogOptions({ title: 'Save ezexchange file' });
  });

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
