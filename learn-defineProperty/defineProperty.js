const obj = {
  val: 1
};

function define (obj, key, val) {
  // 产生闭包，val是函数退出后仍然可以访问的变量
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get() {
      return val;
    },
    set(newValue) {
      val = newValue;
    }
  });
}

define(obj, 'val', 2);

console.log(obj.val);
obj.val = 'a';

console.info(obj.val);