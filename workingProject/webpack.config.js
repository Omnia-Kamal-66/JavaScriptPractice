const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
  },
  devtool: "eval-cheap-module-source-map",
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
  //   devServer:{
  //       contentBase: './'
  //   }
};
//we want to set src/app.js as the entry point
//and specify assets/scripts as the output point
