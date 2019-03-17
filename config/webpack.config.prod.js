const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = common({
  mode: 'production',
  devtool: 'source-map',
  entry: [path.resolve(process.cwd(), 'src/index.tsx')],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true, // 위에서 설정한 template에 넣어준다.
    }),
  ],
});
