const path = require('path')
const pkg = require('../package.json')
const packageName = pkg.name.split('/')[1]

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: `${packageName}.min.js`,
    path: path.resolve(__dirname, '../dist'),
    library: `${packageName}`,
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
