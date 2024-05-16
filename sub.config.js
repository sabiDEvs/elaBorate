const path = require('path');
const public = '../';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const generateHtmlConfig = (template, filename, chunk) => ({
  template: path.resolve(__dirname, `src/HTML/${template}`),
  filename: filename,
  chunks: [`${chunk}`],
});

module.exports = {

  entry: {
    'about/about': './src/SCRIPTS/about.js', // Entry for about.js
    'report/report': './src/SCRIPTS/report.js', // Entry for report.js
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js', // Maintain filename for each entry point
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
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'asset/images/[hash][ext][query]',
          publicPath: `${public}`,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(generateHtmlConfig('about.html', 'about/about.html', 'about/about')),
    new HtmlWebpackPlugin(generateHtmlConfig('report.html', 'report/report.html', 'report/report')),
    new MiniCssExtractPlugin({
      filename: "[name].css", // Output for about.css
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css", // Output for report.css
    }),
  ],
};