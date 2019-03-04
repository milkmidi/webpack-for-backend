import Vue from 'vue';
import {add} from './utils/helpersUtil';
import {sub} from './utils/methodUtil';
new Vue({
  el: '#app'
})
console.log('app.js');
console.log(add(1,1));
console.log(sub(2,1));