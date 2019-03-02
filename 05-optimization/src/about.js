// 用 CDNJS 引入，所以就不需要寫 import Vue
// import Vue from 'vue';

import MyButton from './components/MyButton.vue';

const app = new Vue({
  el: '#app',
  data:{
    message: 'App Message'
  },
  components:{
    MyButton
  }
})