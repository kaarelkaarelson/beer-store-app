const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  target: 'web',
  devServer: {
    port: '9500',
    static: ['./dist'],
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
  },
  optimization: {
    emitOnErrors: true,
  },
  experiments: {
    topLevelAwait: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.(scss)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              // `postcssOptions` is needed for postcss 8.x;
              // if you use postcss 7.x skip the key
              postcssOptions: {
                plugins: () => require('autoprefixer'),
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'beer-ordering-app',
      myPageHeader: 'Beer ordering app',
      filename: './index.html',
      template: './public/index.html',
      favicon: './public/favicon.png',
    }),
    new ESLintPlugin(),
  ],
};
