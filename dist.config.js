const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const generateHtmlConfig = (template, chunk) => ({
    template: path.resolve(__dirname, `src/HTML/${template}`),
    filename: template,
    chunks: [`${chunk}`],
  });
module.exports = {
    entry: {
      'script':  './src/SCRIPTS/script.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    mode: 'development',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: 'single',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            type: 'asset/resource',
            generator: {
              directory: 'asset/images', // Output to dist/asset/images
            },
          },
          {
            test: /\.(ico|eot|ttf|woff|woff2)$/,
            type: 'asset/resource',
            generator: {
              directory: 'asset/fonts', // Output to dist/asset/fonts
            },
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin(generateHtmlConfig('index.html', 'script')),
        new MiniCssExtractPlugin({
          filename: 'style.css',
        }),
      ],
};