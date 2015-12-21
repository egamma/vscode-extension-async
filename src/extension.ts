import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {

    var showAllLanguages = async () =>  {
        var languages = await vscode.languages.getLanguages();
        vscode.window.showQuickPick(languages);
    };

    var disposable = vscode.commands.registerCommand("extension.showAllLanguages", showAllLanguages);

    context.subscriptions.push(disposable);
}