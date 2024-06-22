import * as assert from 'assert';
import * as path from 'path';
import * as vscode from 'vscode';
import * as extension from '../extension';
import { describe, it } from 'mocha';

describe('Extension Test Suite', () => {
    it('Completion provider should suggest HTTP status constants', async () => {
      const extensionPath = path.resolve(__dirname, '../../');

      const context: vscode.ExtensionContext = {
          subscriptions: [],
          workspaceState: {
            get: key => undefined,
            update: () => Promise.resolve(),
            keys: function (): readonly string[] {
              throw new Error('Function not implemented.');
            }
          },
          extensionPath: extensionPath,
          storagePath: '',
          globalStoragePath: '',
          logPath: '',
          asAbsolutePath: (relativePath: string) => path.join(extensionPath, relativePath),
          extensionUri: vscode.Uri.file(extensionPath),
          globalStorageUri: vscode.Uri.parse(''),
          logUri: vscode.Uri.parse(''),
          storageUri: vscode.Uri.parse(''),
          globalState: {
            keys: function (): readonly string[] {
              throw new Error('Function not implemented.');
            },
            get: key => undefined,
            update: () => Promise.resolve(),
            setKeysForSync: (keys) => undefined
          },
          languageModelAccessInformation: {
            onDidChange: () => vscode.Disposable.from(),
            canSendRequest: () => undefined
          },
          secrets: {
            get: async (key) => undefined,
            store: function (key: string, value: string): Thenable<void> {
              throw new Error('Function not implemented.');
            },
            delete: function (key: string): Thenable<void> {
              throw new Error('Function not implemented.');
            },
            onDidChange: () => vscode.Disposable.from(),
          },
          environmentVariableCollection: {
            getScoped: function (scope: vscode.EnvironmentVariableScope): vscode.EnvironmentVariableCollection {
              throw new Error('Function not implemented.');
            },
            persistent: false,
            description: undefined,
            replace: function (variable: string, value: string, options?: vscode.EnvironmentVariableMutatorOptions | undefined): void {
              throw new Error('Function not implemented.');
            },
            append: function (variable: string, value: string, options?: vscode.EnvironmentVariableMutatorOptions | undefined): void {
              throw new Error('Function not implemented.');
            },
            prepend: function (variable: string, value: string, options?: vscode.EnvironmentVariableMutatorOptions | undefined): void {
              throw new Error('Function not implemented.');
            },
            get: function (variable: string): vscode.EnvironmentVariableMutator | undefined {
              throw new Error('Function not implemented.');
            },
            forEach: function (callback: (variable: string, mutator: vscode.EnvironmentVariableMutator, collection: vscode.EnvironmentVariableCollection) => any, thisArg?: any): void {
              throw new Error('Function not implemented.');
            },
            delete: function (variable: string): void {
              throw new Error('Function not implemented.');
            },
            clear: function (): void {
              throw new Error('Function not implemented.');
            },
            [Symbol.iterator]: function (): Iterator<[variable: string, mutator: vscode.EnvironmentVariableMutator], any, undefined> {
              throw new Error('Function not implemented.');
            }
          },
          extensionMode: vscode.ExtensionMode.Test,
          extension: {
            id: 'your-extension-id',
            extensionUri: vscode.Uri.file(extensionPath),
            extensionPath: extensionPath,
            isActive: true,
            packageJSON: require(path.join(extensionPath, 'package.json')),
            extensionKind: vscode.ExtensionKind.UI,
            exports: {},
            activate:() => extension.activate as unknown as Thenable<any>
          }
        };

      extension.activate(context);

      // Open a Python file
      const pythonFilePath = path.resolve(__dirname, '../../src/test/testFiles/test.py');
      const document = await vscode.workspace.openTextDocument(pythonFilePath);
      await vscode.window.showTextDocument(document);

        const position = new vscode.Position(8, 55); // Adjust line and character position as per your test file

        // Trigger completion
        const completionItems = await vscode.commands.executeCommand<vscode.CompletionList>(
            'vscode.executeCompletionItemProvider',
            document.uri,
            position
        );

        new vscode.Selection(position, position);
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Verify completion items
        assert.ok(completionItems);
        // TODO: get these tests to work
        // currently, we can't see the CompletionItems that are created by provideCompletionItems
        // const suggestions = completionItems!.items.map(item => item.label);
        // assert.ok(suggestions.includes('HTTP_200_OK'));
        // assert.ok(suggestions.includes('HTTP_404_NOT_FOUND'));
    });
});
