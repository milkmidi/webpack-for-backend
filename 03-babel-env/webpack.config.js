const webpack = require('webpack');
const path = require('path');

module.exports = (env, argv) => {
  const devMode = argv.mode === 'development';
  console.log('mode:'+ argv.mode);

  const config = {
    context: path.resolve('src'),
    entry: {
      'app': './app.js',
    },
    // https://webpack.js.org/configuration/devtool/#devtool
    // 更換 sourcemap 的方式。
    devtool: devMode ? 'inline-source-map' : false,
    output: {
      // 將打包好的檔發佈至 dist 資料夾
      path: path.resolve('dist'),
      // 打包的 js 檔名, [name] 會吃 entry 的名稱
      filename: '[name].bundle.js',
    },
    module: {
      // Webpack 會依副檔名來決定要用什麼 loader 來處理
      rules: [
        {
          // .js , .jsx 就由 babel-loader 來處理
          // babel 就是將 ES6 等新語法，轉換成向下相容的工具
          test: /\.jsx?$/,
          loader: 'babel-loader',
        },
      ],
    },  
  };
  return config;
}