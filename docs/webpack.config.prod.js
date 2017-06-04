const webpack = require('webpack');

const dist = __dirname;


module.exports = {
  context: __dirname,

  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: dist,
  },

  devtool: false,

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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
