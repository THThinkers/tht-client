const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = option => ({
  target: 'web',
  mode: option.mode,
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  entry: option.entry,
  devtool: option.devtool,
  devServer: option.devServer,
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
    ...option.output,
  },
  plugins: [
    // compile time에 글로벌 변수를 정해준다.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    // CSS파일을 JS파일 각 별로 쪼개서 만들어줌.
    // on-demand loading이 가능하게 해준다.
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new ForkTsCheckerWebpackPlugin({ tslint: true, async: false, checkSyntacticErrors: true }),
    ...option.plugins,
  ],
  module: {
    rules: [
      // {
      //   test: /\.(ts|tsx)$/, // => 타입스크립트 확장자 적용
      //   enforce: 'pre', // babel로 compile 하기 전에 lint해야하기 때문에 pre 설정 추가
      //   use: [
      //     {
      //       loader: 'tslint-loader', // => tsLint로 변경됨!!!
      //     },
      //   ],
      //   include: path.join(__dirname, 'src'),
      //   exclude: /node_modules/,
      // },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/octet-stream',
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/svg+xml',
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      // 일단 sass 는 뺐음.
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize: true,
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')],
              sourceMap: true,
            },
          },
        ],
        exclude: [/node_modules\/react-calendar/],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [/node_modules\/react-calendar/],
      },
    ],
  },
});
