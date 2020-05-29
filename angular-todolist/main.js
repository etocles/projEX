const {app, BrowserWindow, screen, ipcMain} = require('electron')
const url = require("url");
const path = require("path");

let mainWindow

function createWindow () {
  const size = screen.getPrimaryDisplay().workAreaSize;
  mainWindow = new BrowserWindow({
    width: size.width,
    height: size.height,
    webPreferences: {
      nodeIntegration: true /*doesn't have an effect on whether angular works or not*/
    }
  })

  // secondaryWindow = new BrowserWindow({
  //   width:800,
  //   height:800,
  //   show:false
  // })

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/angular-todolist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  // secondaryWindow.loadURL('http://google.com');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
  // secondaryWindow.show();
  //should open remote window
  // ipcMain.on('OpenNumber2', () => {
  //     secondaryWindow.show();
  // })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
