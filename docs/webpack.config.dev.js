const webpack = require('webpack');

const dist = __dirname;
const publicPath = '/';


module.exports = {
  context: __dirname,

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],

  output: {
    filename: 'bundle.js',
    path: dist,
    publicPath,
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: dist,
    publicPath,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              /* eslint-disable global-require */
              plugins: () => [
                require('postcss-import'),
                require('postcss-cssnext'),
              ],
              /* eslint-enable global-require */
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
