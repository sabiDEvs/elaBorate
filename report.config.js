const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const generateHtmlConfig = (template, filename, chunk) => ({
  template: path.resolve(__dirname, `src/HTML/${template}`),
  filename: filename,
  chunks: [`${chunk}`],
});

module.exports = {
  entry: {
    'report/cpe/cpe': './src/SCRIPTS/cpe.js', // Entry for cpe.js
    'report/eee/eee': './src/SCRIPTS/eee.js', // Entry for eee.js
    'report/mee/mee': './src/SCRIPTS/mee.js', // Entry for mee.js
    'report/pre/pre': './src/SCRIPTS/pre.js', // Entry for pre.js
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js', // Maintain filename for each entry point
  },
  plugins: [
    new HtmlWebpackPlugin(generateHtmlConfig('cpe.html', 'report/cpe/cpe.html', 'report/cpe/cpe')),
    new HtmlWebpackPlugin(generateHtmlConfig('eee.html', 'report/eee/eee.html', 'report/eee/eee')),
    new HtmlWebpackPlugin(generateHtmlConfig('mee.html', 'report/mee/mee.html', 'report/mee/mee')),
    new HtmlWebpackPlugin(generateHtmlConfig('pre.html', 'report/pre/pre.html', 'report/pre/pre')),
    new MiniCssExtractPlugin({
      filename: "[name].css", // Output for cpe/cpe.css
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css", // Output for eee/eee.css
    }),
    new MiniCssExtractPlugin({
        filename: "[name].css", // Output for mee/mee.css
    }),
    new MiniCssExtractPlugin({
        filename: "[name].css", // Output for pre/pre.css
    }),
  ],
};