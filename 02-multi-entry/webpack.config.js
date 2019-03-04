const webpack = require('webpack');
const path = require('path');

module.exports = (env, argv) => {
  const devMode = argv.mode === 'development';
  console.log('mode:'+ argv.mode);
  /**
   * argv.mode 這個參數是由 package.json script  --mode=來定義
   * 只支援 development, 和 production 兩種
   */
  var config =  {
    context: path.resolve('src'),
    entry: {
      'app': './app.js',
      'about': './about.js',
    },
    output: {
      // 將打包好的檔發佈至 dist 資料夾
      path: path.resolve('dist'),
      // 打包的 js 檔名, [name] 會吃 entry 的名稱
      filename: '[name].bundle.js',
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
  return config;
}