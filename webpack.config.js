const path = require("path");

module.exports = {
  name: "deployment",
  mode: "production",
  // the main source code file
  entry: "./src/index.ts",
  output: {
    // the output file name
    filename: "index.js",
    // the output path
    path: path.resolve(__dirname, "build")
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` extension will be handled by `ts-loader`
      { test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/ }
    ]
  },
  target: "node"
};
