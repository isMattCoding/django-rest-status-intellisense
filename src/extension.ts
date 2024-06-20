import * as vscode from 'vscode';

const statusHttpConstants = [
    'HTTP_100_CONTINUE',
    'HTTP_101_SWITCHING_PROTOCOLS',
    'HTTP_200_OK',
    'HTTP_201_CREATED',
    'HTTP_202_ACCEPTED',
    'HTTP_203_NON_AUTHORITATIVE_INFORMATION',
    'HTTP_204_NO_CONTENT',
    'HTTP_205_RESET_CONTENT',
    'HTTP_206_PARTIAL_CONTENT',
    'HTTP_300_MULTIPLE_CHOICES',
    'HTTP_301_MOVED_PERMANENTLY',
    'HTTP_302_FOUND',
    'HTTP_303_SEE_OTHER',
    'HTTP_304_NOT_MODIFIED',
    'HTTP_305_USE_PROXY',
    'HTTP_306_RESERVED',
    'HTTP_307_TEMPORARY_REDIRECT',
    'HTTP_400_BAD_REQUEST',
    'HTTP_401_UNAUTHORIZED',
    'HTTP_402_PAYMENT_REQUIRED',
    'HTTP_403_FORBIDDEN',
    'HTTP_404_NOT_FOUND',
    'HTTP_405_METHOD_NOT_ALLOWED',
    'HTTP_406_NOT_ACCEPTABLE',
    'HTTP_407_PROXY_AUTHENTICATION_REQUIRED',
    'HTTP_408_REQUEST_TIMEOUT',
    'HTTP_409_CONFLICT',
    'HTTP_410_GONE',
    'HTTP_411_LENGTH_REQUIRED',
    'HTTP_412_PRECONDITION_FAILED',
    'HTTP_413_REQUEST_ENTITY_TOO_LARGE',
    'HTTP_414_REQUEST_URI_TOO_LONG',
    'HTTP_415_UNSUPPORTED_MEDIA_TYPE',
    'HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE',
    'HTTP_417_EXPECTATION_FAILED',
    'HTTP_500_INTERNAL_SERVER_ERROR',
    'HTTP_501_NOT_IMPLEMENTED',
    'HTTP_502_BAD_GATEWAY',
    'HTTP_503_SERVICE_UNAVAILABLE',
    'HTTP_504_GATEWAY_TIMEOUT',
    'HTTP_505_HTTP_VERSION_NOT_SUPPORTED',
];

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
            }
        },
        '.' // Trigger completion on '.'
    );

    context.subscriptions.push(provider);
}

export function deactivate() {}
