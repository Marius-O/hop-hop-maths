let path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    bundle: path.resolve(__dirname, '../src/app/index.tsx'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
