﻿const webpack = require('webpack');
const path = require('path');

/*
process.env.NODE_ENV
  會由 package.json cross-env NODE_ENV=development 來決定
  只支援 development, 和 production 兩種
*/
module.exports = {
  mode:  process.env.NODE_ENV,
  context: path.resolve('src'),
  entry: {
    'app': './app.js',
  },
  output: {
    // 將打包好的檔發佈至 dist 資料夾
    path: path.resolve('dist'),
    // 打包後的 js 檔名
    filename: 'bundle.js',
  },
  module: {
    // webpack 會依副檔名來決定要用什麼 loader 來處理
    rules: [
      {
        // .js , .jsx 就由 babel-loader 來處理
        // babel 就是將 ES6 等新語法，轉換成向下相容舊Browser的工具
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },  
};
