import * as vscode from 'vscode';
import { statusHttpConstants } from './httpConstants';

export function activate(context: vscode.ExtensionContext) {
    const provider = vscode.languages.registerCompletionItemProvider(
        { scheme: 'file', language: 'python' },
        {
            provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
              const linePrefix = document.lineAt(position).text.substr(0, position.character);
                if (!linePrefix.endsWith('status.')) {
                    return undefined;
                }

                return statusHttpConstants.map(httpConstant => {
                    const item = new vscode.CompletionItem(httpConstant, vscode.CompletionItemKind.Constant);
                    item.detail = 'HTTP Status Code';
                    return item;
                });
            },
            resolveCompletionItem(item: vscode.CompletionItem, token: vscode.CancellationToken) {
                // Here you can enhance or modify the completion item further
                // For example, add more details or documentation based on `item.label`

                return item;
            }
        },
        '.' // Trigger completion on '.'
    );

    context.subscriptions.push(provider);
}

export function deactivate() {}
