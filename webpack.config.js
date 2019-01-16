const publidDir = __dirname + '/public';
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // 元になるファイル
  // こちらをコンパイルしていく
  entry: [
    './src/index.js'
  ],
  output: {
    path: publidDir,
    publicPath: '/',
    filename: 'bundle.js'
  },
  // どのようなライブラリを使ってコンパイルをしていくかの設定
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { modules: false }]]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader"
          }
        ]
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // おまじない
    }
  },
  // webpack_devserverの設定
  devServer: {
    historyApiFallback: true,
    // document_rootになる。
    contentBase: publidDir
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
