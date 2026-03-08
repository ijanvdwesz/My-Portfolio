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
      filename: 'bundle.[contenthash].js', // hashed filename for production cache busting
      publicPath: '/', // works for both dev and production
      clean: true, // cleans dist folder on each build
    },
    devServer: {
      static: [
        { directory: path.join(__dirname, 'dist') },
        { directory: path.join(__dirname, 'public') }, // serve public files in dev (PDF, images)
      ],
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true, // SPA routing support
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[hash][ext][query]',
          },
        },
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
          test: /\.(pdf|txt)$/i, // include PDF as asset if needed
          type: 'asset/resource',
          generator: {
            filename: '[name][ext]', // keep original filename
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
            to: '', // copy everything to dist root
            globOptions: {
              ignore: ['**/index.html'], // don't overwrite the HTML
            },
          },
        ],
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: 'all', // better production bundling
      },
    },
    devtool: isProd ? false : 'source-map', // dev tool for debugging
  };
};