const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

// production과 development에서 공동으로 사용하는 걸 common에 정의해놓고 합침.
// wepback-merge를 사용하는 방법도 있음.
module.exports = common({
  // webpack이 내장된 최적화를 사용하도록 해주는 설정. development/production
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  // historyApiFallback: html5 history api 사용할 때, 해당하는 라우트 없으면 index.html 로드
  // app.get('/*', (req, res) => res.sendFile(index.html)); 대충 이런 역할
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:4000/',
    },
  },
  // react-hot-loader를 위한 설정인데,
  // 쓸지 안 쓸지 먼저 정하고.. typescript에 대한 설정 하겠음.
  // typescirpt를 위한 react-hot-loader설정은 조금 복잡.
  babelOption: {
    cacheDirectory: true,
    plugins: ['react-hot-loader/babel'],
  },
  // webpack이 dependency graph를 만들기 시작하는 포인트.
  entry: [path.resolve(process.cwd(), 'src/index.tsx')],
  // webpack 번들링 결과가 나오는 곳과 파일 이름. 나오는 곳은 common에 있음.
  output: {
    filename: 'bundle.js',
  },
  // 나중에 production 참고
  optimization: {
    minimize: false,
  },
  // 번들링된 CSS나 JS(TS) 파일의 reference를 담는 html파일을 만들어준다.
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
