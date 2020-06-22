const {app, BrowserWindow, screen, ipcMain} = require('electron')
const url = require("url");
const path = require("path");

let mainWindow

function createWindow () {
  const size = screen.getPrimaryDisplay().workAreaSize;
  mainWindow = new BrowserWindow({
    width: size.width,
    height: size.height,
    icon: path.join(__dirname, `/PJX_5.png`),
    webPreferences: {
      nodeIntegration: true /*doesn't have an effect on whether angular works or not*/
    }
  })
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/projex/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  //configuring menu
  let windowMenu = Menu.getApplicationMenu();
  let menuItem = new MenuItem( {role: "about"} );
  windowMenu.append(menuItem);
  Menu.setApplicationMenu(windowMenu);


  //handling closing
  mainWindow.on('closed', function () {
    mainWindow = null
  })
  //making application pop up when notification is clicked
  ipcMain.on('notifClicked', () => {
      mainWindow.show();
  })
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
