// 沒有加 export ，該變數就只能用到這隻 js 檔名
var myVar = 'milkmidi';


// 加上 export ，這樣其他隻 js 就可以引用
export function add(a, b){
  return a + b;
}

// 一隻 js 可以有多個 export
export const sub = (a, b) => {
  return a - b;
}


class MyClass {
  foo(){
    console.log('foo');
  }
}

// export default 只能有一個
export default MyClass;