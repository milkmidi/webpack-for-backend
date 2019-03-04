const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (env, argv) => {
  const devMode = argv.mode === 'development';
  console.log('mode:'+ argv.mode);

  const config = {
    context: path.resolve('src'),
    entry: {
      'milkmidi-webcomponent': './WebComponentEntry.js',
    },
    // sourcemap 的產生方式
    devtool: devMode ? 'inline-source-map' : false,
    output: {
      // 將打包好的檔發佈至 dist 資料夾
      path: path.resolve('dist'),
      // 打包的 js 檔名, [name] 會吃 entry 的名稱
      filename: `[name]-1.0.0${devMode?'':'.min'}.js`,
      // library 名稱，發佈後，就可以用 window["milkmidi-webcomponent"] 取得
      library: 'milkmidi-webcomponent',
      // 這個請看官網說明
      // https://webpack.js.org/configuration/output/#outputlibrarytarget
      libraryTarget: 'umd',
    },
    resolve: {
      modules: [
        // 讓 webpack 在找套件時，依需由這些路徑開始找
        path.resolve('src'),
        path.resolve('node_modules'), // 這個不能刪喔, 啾咪
      ],
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
        {
          // .vue 檔當然就由 vue-loader 來處理
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          // .css 檔, 因為我們是在 .vue 裡寫 style , 所以還需要一個 vue-style-loader 來處理
          test: /\.css$/,
          loader: [
            'vue-style-loader',
            'css-loader',
          ],
        },
      ],
    },
    plugins: [
      // VueLoader 官網說要加的，沒特別研究為什麼，反正不加就不會動
      new VueLoaderPlugin(),
    ],
    // 打包時，要排除哪些第三方套件包
    /*
    如果不加
    import Vue from 'vue';
    就會把整個 Vue 的 Source 都打包裡你的程式，會肥滋滋的
    因為我們用了 cdnjs ，所以不需要再打包
    */
    // https://webpack.js.org/configuration/externals/#externals
    // https://ithelp.ithome.com.tw/articles/10187554
    externals: {
      vue: 'Vue',
    },
  };
  return config;
}