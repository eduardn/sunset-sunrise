// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const NighShift = require('./src/NightShift');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate() {
    NighShift.start();
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;