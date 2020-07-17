const {app, BrowserWindow, screen, ipcMain, ipcRenderer, Menu, MenuItem} = require('electron');
const url = require("url");
const path = require("path");

let mainWindow;
let viewMode;

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

  // console.log(mainWindow.webContents);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  //handling closing
  mainWindow.on('closed', function () {
    mainWindow = null
  })
  //making application pop up when notification is clicked
  ipcMain.on('notifClicked', () => {
      mainWindow.show();
  })

  ipcMain.on('ViewModeType', function(event , data){
    viewMode = data.view_mode;
    createApplicationMenu();
  });

  ipcMain.on('PortalOpened', function(event , data){
    mainWindow.webContents.openDevTools();
    // console.log("%c opening tools",'color:yellow');
    setTimeout( function() {
      mainWindow.webContents.closeDevTools();
      // console.log("%c closing tools",'color:yellow');
    }, 500) //wait 300ms and then close it
  });

}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

function createApplicationMenu(){
  //configuring menu
  // const isMac = process.platform === "darwin";
  mainWindow.webContents.send('giveViewMode')

  //determining which dark/box to have checked
  let isDarkMode = (viewMode == "dark_mode");
  let isLightMode = (viewMode == "light_mode");

  const template = [
    {
      label: "File",
      submenu: [
        {
          label:"Undo",
          accelerator: "CmdOrCtrl+Z",
          click(){
            mainWindow.webContents.send('undoAction');
          }
        },
        {
          label:"Redo",
          accelerator: "CmdOrCtrl+Y",
          click(){
            mainWindow.webContents.send('redoAction');
          }
        },
        {
          type:"separator"
        },
        {
          label:"Archived Projects",
          accelerator: "CmdOrCtrl+T",
          click() {
            mainWindow.webContents.send('openArchive');
          }
        },
        {
          label:"Settings",
          accelerator: "CmdOrCtrl+J",
          click() {
            mainWindow.webContents.send('openSettings');
          }
        },
        {
          type:"separator"
        },
        {
          label:"Quit",
          role: "quit",
        },
      ],
    },
    {
      label: "View",
      submenu:[
        {
          label: 'Dark',
          type: 'radio',
          checked: isDarkMode,
          click() {
            mainWindow.webContents.send('DarkModeEnable');
          }
        },
        {
          label: 'Light',
          type: 'radio',
          checked: isLightMode,
          click() {
            mainWindow.webContents.send('LightModeEnable');
          }
        },
      ]
    },
    {
      label: "Test",
      click() {
        console.log('test sent')
        mainWindow.webContents.send('async-test', {'SAVED': 'File Saved'});
      }
    },
    {
      label: "Help",
      submenu:[
        {
          label: "About...",
          click() {
            /*user gets sent to an about page on mikpozdn.com*/
          }
        },
        {
          label: "Open DevTools",
          accelerator: "CmdOrCtrl+Shift+I",
          click() {
            mainWindow.webContents.openDevTools();
          }
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
