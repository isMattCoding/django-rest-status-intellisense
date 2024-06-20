# VS Code Extension for HTTP Status Code Suggestions

This Visual Studio Code extension provides inline suggestions for HTTP status codes from the `status` module of Django REST Framework.

## Features

- Provides inline suggestions for HTTP status codes when working in `.py` files.
- Automatically triggers suggestions after typing `status.`.
- Supports all HTTP status codes, categorized into:
  - Informational (1xx)
  - Successful (2xx)
  - Redirection (3xx)
  - Client Error (4xx)
  - Server Error (5xx)

## Installation

1. Clone this repository.
2. Open the cloned repository in Visual Studio Code.
3. Press `F5` to open a new VS Code window with your extension loaded.

## Usage

1. Ensure you're working in a `.py` file.
2. Import the `status` module from `rest_framework`:
   ```python
   from rest_framework import status
   ```
3. Start typing `status.` and the suggestions for HTTP status codes will appear.

## Development

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Setup

1. Install dependencies:
   ```sh
   npm install
   ```

2. Open the extension in VS Code:
   ```sh
   code .
   ```

### Running the Extension

Press `F5` to open a new VS Code window with your extension loaded.

### Testing

To run the tests, use the following command:
```sh
npm test
```

### Creating a Build

To package the extension for distribution, run:
```sh
vsce package
```

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

### Additional Notes

- Ensure your extension code follows the best practices for VS Code extensions.
- Keep the extension lightweight and focused on providing the best developer experience for inline HTTP status code suggestions.

## Contact

For any queries or suggestions, please open an issue on the GitHub repository.
