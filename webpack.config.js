var publidDir = __dirname + '/public';
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
        exclude: /node_modules/,
        loader: 'babel-loader',
        options:  {
          presets: [
            ['@babel/env',
              {
                  "targets": {
                      "ie": 11
                  },
                  "useBuiltIns": "usage"
              }
            ]
          ]
        }
      }
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
  }
};
