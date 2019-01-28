const isDev = process.env.NODE_ENV === 'development';
const checkProxy = require('check-proxy').check;

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    '@babel/polyfill', // enables async-await
    './client/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
        // query: {
        //   babelrc: false,
        //   presets: [['es2015', {modules: false}], 'react', 'stage-3']
        // }
      }
    ]
  }
};
