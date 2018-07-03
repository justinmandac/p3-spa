const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  // resolve: {
  //   extensions: ['.ts', '.tsx', '.js'],
  // },
  // Dev server options
  devServer: {
    contentBase: '.',
    compress: true,
    port: 8081,
  },
};