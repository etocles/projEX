const {app, BrowserWindow, screen, ipcMain, Menu, MenuItem} = require('electron');
const url = require("url");
const path = require("path");

let mainWindow;

function createApplicationMenu(){
  //configuring menu
  let windowMenu = Menu.getApplicationMenu();
  let menuItem = new MenuItem({
    role: "about",
    label:"Yiggy",
  });
  windowMenu.append(menuItem);
  Menu.setApplicationMenu(windowMenu);

  // var menu = Menu.buildFromTemplate([
  //     {
  //         label: 'File',
  //         submenu: [
  //             {label:'Adjust Notification Value'},
  //             {label:'CoinMarketCap'},
  //             {label:'Exit'}
  //         ]
  //     },
  //     {
  //         label: 'Edit',
  //         submenu: [
  //             {label:'Adjust Notification Value'},
  //             {label:'CoinMarketCap'},
  //             {label:'Exit'}
  //         ]
  //     },
  //     {
  //         label: 'Window',
  //         submenu: [
  //             {label:'Adjust Notification Value'},
  //             {label:'CoinMarketCap'},
  //             {label:'Exit'}
  //         ]
  //     },
  //     {
  //         label: 'View',
  //         submenu: [
  //             {label:'Adjust Notification Value'},
  //             {label:'CoinMarketCap'},
  //             {label:'Exit'}
  //         ]
  //     },
  //
  // ]);

  // shell.openExternal('http://coinmarketcap.com')
}


function createWindow () {
  const size = screen.getPrimaryDisplay().workAreaSize;
  mainWindow = new BrowserWindow({
    width: size.width,
    height: size.height,
    icon: path.join(__dirname, `/PJX_5.png`),
    webPreferences: {
      nodeIntegration: true /*doesn't have an effect on whether angular works or not*/
    },
    show:false,
  })
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/projex/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  createApplicationMenu();

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
