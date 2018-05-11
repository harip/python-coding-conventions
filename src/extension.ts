'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as conventions from './conventions'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "python-coding-conventions" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.applyConventions', () => {
        // The code you place here will be executed every time your command is executed

        let editor=vscode.window.activeTextEditor;
        if (!editor){
            return;
        }

        let doc=editor.document;
        doc.

        let lineCount=doc.lineCount;
        for (let i=0;i<lineCount;i++){
            let lineText=doc.lineAt(i);
            console.log(lineText.text);
        }

        // Display a message box to the user
        vscode.window.showInformationMessage(`Total lines in the current file ${lineCount}`);
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}