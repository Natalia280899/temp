const path = require("path");

module.exports = {
  entry: path.resolve("src", "index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader
      },
    ],
  },
  resolve: {
    alias: {
      react: path.resolve("node_modules", "react"),
    },
  },
  externals: [
    {
      react: {
        root: "React",
        amd: "react",
        commonjs: "react",
        commonjs2: "react",
      },
    },
  ],
  output: {
    path: path.resolve("dist"),
    filename: "main.js",
    libraryTarget: "umd",
    globalObject: "this",
  },
};
