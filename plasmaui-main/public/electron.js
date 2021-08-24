const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow(
        {
            width: 1600,
            height: 900,
            webPreferences: {
                nodeIntegration: true,
            },
            resizable: true,
            minWidth: 1280,
            minHeight: 720,
            // maxHeight: 900,
            // maxWidth: 1600
        }
    );
    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
