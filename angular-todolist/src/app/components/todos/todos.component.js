// <head>
// <script defer src="name of this file.js"></script>
// </head>

const remote = require('electron').remote;

this.createBrowserWindow();

const testBtn = document.getElementById('wahoo');
testBtn.onclick = createBrowserWindow;

createBrowserWindow() {
  const BrowserWindow = remote.BrowserWindow;
  const win = new BrowserWindow({
    height: 600,
    width: 800
  });

  win.loadURL('www.google.com');
}
