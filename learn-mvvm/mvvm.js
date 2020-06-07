class MVVM {
  constructor(options) {
    this.$options = options || {};
    const data = this._data = this.$options.data;

    // 数据代理，  vm._data.xxx => 实现vm.xxx
    Object.keys(data).forEach((key) => {
      this._proxyData(key);
    });

    this._initCompute();
    observe(data, this);
    this.$compile = new Compile(options.el || document.body, this);
  }

  $watch(key, cb, options) {
    new Watcher(this, key, cb);
  }
  _proxyData(key, setter, getter) {
    setter = setter ||
      Object.defineProperty(this, key, {
        configurable: false,
        enumerable: true,
        get() {
          return this._data[key];
        },
        set(newVal) {
          this._data[key] = newVal;
        }
      });
  }
  _initCompute() {
    const computed = this.$options.computed;
    if (typeof computed === 'object') {
      Object.keys(computed).forEach(key => {
        Object.defineProperty(this, key, {
          get: typeof computed[key] === 'function' ? computed[key] : computed[key].get,
          set: function () {}
        });
      });
    }
  }
}