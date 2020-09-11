const path = require('path');
const HtmLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 9000,
  },
/*   module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      }
    ],
  }, */
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false}),
    new HtmLWebpackPlugin({
      template: __dirname + '/src/index.html',
      inject: 'body'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
};