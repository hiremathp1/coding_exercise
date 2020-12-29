/* const path = require("path"); */
import path from "path";

module.exports = {
  mode: "production",
  entry: {
    index: "index.js",
  },
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"],
        },
      },
    ],
  },
};
