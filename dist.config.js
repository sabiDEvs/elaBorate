const path = require('path');
const public = './';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const generateHtmlConfig = (template, chunk) => ({
    template: path.resolve(__dirname, `src/HTML/${template}`),
    filename: template,
    chunks: [`${chunk}`],
  });
module.exports = {
    entry: {
      'index':  './src/SCRIPTS/script.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      clean: true,
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: 'single',
    },
    
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
            test: /\.(ico|eot|ttf|woff|woff2)$/,
            type: 'asset/resource',
            generator: {
              filename: 'asset/fonts/[hash][ext][query]',
              publicPath: `${public}`,// Output to dist/asset/fonts
            },
          },
          {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            type: 'asset/resource',
            generator: {
              filename: 'asset/images/[hash][ext][query]',
              publicPath: `${public}`,
            },
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin(generateHtmlConfig('index.html', 'index')),
        new MiniCssExtractPlugin({
          filename: '[name].css',
        }),
      ],
};