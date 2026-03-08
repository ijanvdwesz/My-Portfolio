const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.[contenthash].js',
      publicPath: '/', 
      clean: true,
    },
    devServer: {
      static: [
        { directory: path.join(__dirname, 'dist') },
        { directory: path.join(__dirname, 'public') },
      ],
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]',
          },
        },
        {
          test: /\.(pdf)$/i,
          type: 'asset/resource',
          generator: {
            filename: '[name][ext]',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'public',
            to: '',
            globOptions: {
              ignore: ['**/index.html'], 
            },
          },
        ],
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    devtool: isProd ? false : 'source-map',
  };
};