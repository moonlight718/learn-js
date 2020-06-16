function observer () {
  return new Proxy([], {
    get(target, prop) {
      const matArr = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
      if (matArr.indexOf(prop) > -1) {
        console.log(prop);
      }
      return Reflect.get(target, prop);
    },
    set(target, prop, value) {
      console.log(prop, value);
      return Reflect.set(target, prop, value);
    }
  });
}

const arr = observer();

arr.push('aa');