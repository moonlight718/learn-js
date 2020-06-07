# Promse/A+ 规范
## 1. 规范
1. Promise 是一个有then方法的对象或函数，行为遵守本规范
2. thenable是一个有then方法的对象或者函数
3. value是Promise状态成功的值，包括undefined/thenable或者promise
4. exception是一个使用throw抛出的异常值
5. reason是promise状态失败的值

## 2.要求

### 2.1 Promise status
Promise必须处在pending、fulfilled或者rejected状态之一。
概括：promise状态只能从pending变成fulfilled，或者从pending变成rejected。promise成功，有成功的value，promise失败有失败的reason

#### 2.1.1 如果promise在pending状态
2.1.1.1 可以变成fulfilled 或者 rejected

#### 2.1.2 如果promise在fulfilled状态
2.1.2.1 不会变成其他状态
2.1.2.2 必须有个value值

#### 2.1.3 如果promise在fulfilled状态
2.1.3.1 不会变成其他状态
2.1.3.2 必须有个promise被reject的reason

### 2.2 then方法
promise必须提供一个then方法来访问最终的结果，promise的then方法接收两个参数
```promise.then(onFulfilled, onRejected)```

#### 2.2.1 onFulfilled 和 onRejectd 都是可选参数
2.2.1.1 onFullfilled必须是函数类型
2.2.1.2 onRejected必须是函数类型

#### 2.2.2 如果onFulfilled是函数
2.2.2.1 必须在promise变成fulfilled时，调用onFulfilled，参数时promise的value
2.2.2.2 在promise专状态不是fulfilled之前，不能调用
2.2.2.3 onFulfill只能被调用一次

#### 2.2.3 如果onRejected是函数
2.2.3.1 必须在promise变成rejected时，调用onRejected，参数时promise的reason
2.2.3.2 在promise的状态不是rejected之前，不能调用
2.2.3.3 onRejected只能被调用一次

#### 2.2.4 onFulfilled 和 onRejected应该是微任务

#### 2.2.5 onFulfilled和onRejected必须作为函数被调用

#### 2.2.6 then方法可能被多次调用
2.2.6.1 如果promise变成fulfilled态，所有的onFulfilled回调函数都需要按照then的顺序执行。
2.2.6.2 如果promise变成了rejected态，所有的onRejected回调都需要按照then的顺序执行。

#### 2.2.7 then必须返回一个promise
``` promise2 = promise1.then(onFulfilled, onRejected); ```

## 2.3 resolvePromise
```resolvePromise(promise2, x, resolve, reject);```

### 2.3.1 如果promise2和x相等，那么reject promise with a TypeError
### 2.3.2 如果x是一个promise
2.3.2.1 如果x是pending状态，那么prmose





