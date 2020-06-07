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