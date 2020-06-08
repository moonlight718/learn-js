// const person = {
//   name: 'lily'
// };

// const proxy = new Proxy(person, {
//   // get 方法， 可继承, 如果读取Obj对象的继承的属性时，拦截会生效
//   get(target, propKey) {
//     if (propKey in target) {
//       return person[propKey];
//     } else {
//       throw new ReferenceError(`prop name ${propKey} dose not exists.`);
//     }
//   }
// });

// const obj = Object.create(proxy);

// console.log(obj.name);
// console.log(obj.age);

// function createArray(...elements) {
//   const handler = {
//     get(target, propKey, receiver) {
//       const index = Number(propKey);
//       if (index < 0) {
//         propKey = target.length + index;
//       }
//       // return Reflect.get(target, propKey, receiver);
//       return target[propKey];
//     }
//   };

//   const target = [];
//   target.push(...elements);
//   return new Proxy(target, handler);
// }

// const arr = createArray('a', 'b', 'c');

// // console.log(arr[-2]);

// function pipe(value) {
//   const funcStack = [];
//   const proxy = new Proxy({}, {
//     get(target, fnName) {
//       if (fnName === 'get') {
//         return funcStack.reduce((val, fn) => {
//           return fn(val);
//         }, value);
//       }
//       funcStack.push(funcs[fnName]);
//       return proxy;
//     }
//   });
//   return proxy;
// }

// const funcs = {
//   double: n => n * 2,
//   pow: n => n * n,
//   reverseInt: n => n.toString().split("").reverse().join("") | 0
// };

// console.log(pipe(3).double.pow.reverseInt.get);

// const proxy = new Proxy({}, {
//   // 指向原始读取操作所在的那个对象
//   get(target, propName, receiver) {
//     return receiver;
//   }
// });
// const d = Object.create(proxy);

// console.log(proxy.name === proxy);
// console.log(d.a === d);

// const target = Object.defineProperties({}, {
//   // 如果一个属性不可配置且不可读，则Proxy不能修改该属性，否则通过Proxy对象访问该属性会报错
//   foo: {
//     value: 123,
//     writable: false,
//     configurable: false
//   }
// });

// const proxy = new Proxy(target, {
//   get(target, propKey) {
//     return 'abc';
//   }
// });
// console.log(proxy.foo);


// const validator = {
//   set(obj, prop, value) {
//     if (prop === 'age') {
//       if (!Number.isInteger(value)) {
//         throw new TypeError('The age is not an integer');
//       }
//       if (value > 200) {
//         throw new RangeError('The age seems invalid');
//       }
//     }

//     obj[prop] = value;
//   }
// };
// const person = new Proxy({}, validator);

// person.age = 100;
// console.log(person.age);

// // person.age = 'young';
// // person.age = 300;

// const handler = {
//   get(target, key) {
//     invariant(key, 'get');
//     return target[key];
//   },
//   set(target, key,value) {
//     invariant(key, 'set'); 
//     target[key] = value;
//     return true;
//   }
// };

// function invariant (key, action) {
//   if (key[0] === '_') {
//     throw new Error(`Invalid attempt to ${action} private "${key}" property`);
//   }
// }

// const target = {};
// const proxy = new Proxy(target, handler);

// console.log(proxy.prop = 'e');

// const proxy = new Proxy({}, {
//   set(obj, prop, value, receiver) {
//     obj[prop] = receiver;
//   }
// });

// proxy.foo = 'bar';
// console.log(proxy.foo === proxy);

// const handler = {
//   set(obj, prop, value, receiver) {
//     obj[prop] = receiver;
//   }
// };
// const proxy = new Proxy({}, handler);
// const myObj = {};
// Object.setPrototypeOf(myObj, proxy);
// myObj.foo = 'bar';
// console.log(myObj.foo === myObj);
'use strict';
const obj = {};
// Object.defineProperty(obj, 'foo', {
//   value: 'bar'
// });

const handler = {
  set(obj, prop, value, receiver) {
    obj[prop] = value;
    return true;
  }
};
const proxy = new Proxy(obj, handler);

proxy.foo = 'baz';
console.log(proxy.foo);

// 严格模式下set如果不返回true就会报错