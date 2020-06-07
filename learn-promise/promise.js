const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function myPromise(executor) {
  const self = this;
  self.status = PENDING;
  self.onFullfilled = [];
  self.onRejected = [];

  function resolve(value) {
    // 多次调用resolve函数是不生效的，有效执行只有一次
    if (self.status === PENDING) {
      self.status = FULFILLED;
      self.value = value;
      self.onFullfilled.forEach(fn => fn());
    }
  };
  function reject(reason) {
    // 多次调用reject函数是不生效的，有效执行只有一次
    if (self.status === PENDING) {
      self.status = REJECTED;
      self.reason = reason;
      self.onRejected.forEach(fn => fn());
    }
  }

  try {
    executor(resolve, reject);
  } catch(ex) {
    reject(ex);
  }
    
}

myPromise.prototype.then = function(onFullfilled, onRejected) {
  onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : value => value;
  onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason};
  const self = this;
  let promise2 = new myPromise((resolve, reject) => {
    if (self.status === FULFILLED) { // 当状态已变更为Fulfilled
      setTimeout(() => {
        try {
          let x = onFullfilled(self.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (ex) {
          reject(ex);
        }
      },0);
    } else if (self.status === REJECTED) { // 当前状态已变更为rejected
      setTimeout(() => {
        try {
          let x = onRejected(self.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch(ex) {
          reject(ex);
        }
      }, 0);
    } else if(status === PENDING) {
      self.onFullfilled.push(() => {
        setTimeout(() => {
          try {
            let x = onFullfilled(self.value);
            resolvePromise(promise2,x, resolve, reject);
          } catch (ex) {
            reject(ex);
          }
        }, 0);
      });
      self.onRejected.push(() => {
        try {
          let x = onRejected(this.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (ex) {
          reject(ex);
        }
      });
    }
  });
  return promise2;
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    reject(new TypeError('Chaining cycle'));
  }
  if (x && typeof x === 'object' || typeof x === 'function') {
    let used;
    try {
      let then = x.then;
      if (typeof then === 'function') {
        then.call(x, (y) => {
          if (used) return;
          used = true;
          resolvePromise(promise2, y, resolve,reject);
        }, (r) => {
          if (used) return;
          used = true;
          reject(r);
        });
      } else {
        if (used) return;
        used = true;
        resolve(x);
      }
    } catch (ex) {
      if (used) return;
      used = true;
      reject(ex);
    }
  } else {
    resolve(x);
  }
}

const promise1 = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 100);
});
const promise2 = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  },100);
});
const promise3 = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 100);
});

promise1.then((res) => {
  console.log(res);
  return promise2;
}).then((res) => {
  console.log(res);
  return promise3;
}).then((res) => {
  console.log(res);
});