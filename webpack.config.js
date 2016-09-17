module.exports = {
  devtool: 'eval-source-map',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
    ],
  }
}