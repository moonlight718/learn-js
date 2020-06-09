class Watcher {
  constructor(vm ,expOrFn, cb) {
    console.log(1,this);
    this.cb = cb;
    this.vm = vm;
    this.expOrFn = expOrFn;
    this.depIds = {};
  
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = this.parseGetter(expOrFn.trim());
    }

    this.value = this.get();
  }
  update() {
    this.run();
  }
  run() {
    // 1. 每次调用run()时会触发相应属性的getter
    // gettter里面会触发dep.depend() ,继而触发这里的addDep
    // 2. 假如相应属性的dep.id已经在当前Watcher的depIds里，说明不是一个新属性，仅仅时改变了值而已
    // 则不需要当前watcher添加到该属性的dep里
    // 3. 假如相应属性时新的属性值，则将当前watcher添加到新属性的dep里
    // 如通过vm.child = {name: 'a'}改变了child.name的值，child.name就是一个新属性
    const value = this.get();
    const oldVal = this.value;
    if (value !== oldVal) {
      this.value = value;
      this.cb(value, oldVal);
    }
  }
  parseGetter(exp) {
    if (/[^\w.$]/.test(exp)) return;

    const exps = exp.split('.');

    return function (obj) {
      for (let i = 0, len = exps.length; i < len; i++) {
        if (!obj) return;
        obj = obj[exps[i]];
      }
      return obj;
    };
  }
  get() {
    // 给target赋值
    Dep.target = this;
    // 调用data中key的get
    const value = this.getter.call(this.vm, this.vm);
    Dep.target = null;
    return value;
  }
  addDep(dep) {
    if (!this.depIds.hasOwnProperty(dep.id)) {
      dep.addSub(this);
      this.depIds[dep.id] = dep;
    }
  }
}