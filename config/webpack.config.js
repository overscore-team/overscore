const path = require('path')
const pkg = require('../package.json')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: `${pkg.name}.min.js`,
    path: path.resolve(__dirname, '../dist'),
    library: `${pkg.name}`,
    libraryTarget: 'umd',
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
