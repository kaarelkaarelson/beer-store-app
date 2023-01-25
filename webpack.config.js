// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const path = require('path');
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const HtmlWebpackPlugin = require('html-webpack-plugin');
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const ESLintPlugin = require('eslint-webpack-plugin');

// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
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
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.scss'],
  },
  output: {
    // @ts-expect-error TS(2304): Cannot find name '__dirname'.
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
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
                // @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
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
