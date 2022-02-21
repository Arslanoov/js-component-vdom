const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, "src", "index.ts"),
  target: "es5",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    chunkFormat: 'module',
    library: "library",
    libraryTarget: 'amd'
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ]
  }
};