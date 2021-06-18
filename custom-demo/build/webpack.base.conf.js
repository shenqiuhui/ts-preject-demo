const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    filename: '[name].[chunkhash:8].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true // 为 true 只做语言转换不做类型检查
            }
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/tpl/index.html'
    }),
    new ForkTsCheckerWebpackPlugin()
  ],
}
