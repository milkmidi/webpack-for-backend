// 引用 myUtils 裡的 add, sub 函式
// 因為有加 export ，所以就能用 import 來引用
import {add, sub} from './utils/myUtils';

// 如果要引用 export default，就可以這樣寫
import MyClass from './utils/myUtils';

// 以上兩行可以寫成一行
// import {add,sub}, MyClass from './utils/myUtils';

// import 副檔名 .js 可以不用寫
// import 專案裡的 .js ，一定要寫相對路徑，


console.log(add(2,1));
console.log(sub(2,1));
console.log('hi app');