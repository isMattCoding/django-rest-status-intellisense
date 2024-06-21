const { defineConfig } = require("@vscode/test-cli");

module.exports = defineConfig([
  {
    label: "unitTests",
    files: "out/test/**/*.test.js",
    version: "insiders",
    workspaceFolder: "./.vscode-test1",
  },
  // you can specify additional test configurations, too
]);
