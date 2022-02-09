const path = require("path");

const fileRules = {
  test: /\.(svg|jpg|png)$/,
  use: [
    {
      loader: "url-loader",
      options: {
        limit: Infinity
      }
    }
  ]
};

const jsRules = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env", "@babel/preset-react"]
    }
  }
};

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    library: "react-daniel-ui",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true
  },

  externals: ["react", "react-dom", "styled-components"],
  module: {
    rules: [
      jsRules,
      fileRules,
      {
        test: /\.html$/i,
        loader: "html-loader"
      }
    ]
  }
};
