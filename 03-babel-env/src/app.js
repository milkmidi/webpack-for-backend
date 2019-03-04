import {add, sub , multi} from './utils';
import MyClass from './utils/MyClass';

console.log(add(2,2));
console.log(sub(2,2));
console.log(multi(2,2));
console.log('hi webpack');


var myClass = new MyClass();
myClass.foo();