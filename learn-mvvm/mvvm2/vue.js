class Vue {
  constructor(opt) {
    this.opt = opt;
    this.observe(opt.data);
    this.compile(document.querySelector('#app'));
  }

  // 为响应式data里每一个key绑定一个观察者对象
  observe(data) {
    Object.keys(data).forEach(key => {
      let obv = new Observer();
      
      data["_" + key] = data[key];
      Object.defineProperty(data, key, {
        get() {
          Observer.target && obv.addSubNode(Observer.target);
          return data['_' + key];
        },
        set(newVal) {
          obv.update(newVal);
          data['_' + key] = newVal;
        }
      });
    }); 
  } 

  compile(node) {
    [...node.childNodes].forEach(child => {
      if(!child.firstElementChild && /\{\{(.*)\}\}/.test(child.innerHTML)) {
        const key = RegExp.$1.trim();
        child.innerHTML = child.innerHTML.replace(new RegExp('\\{\\{\\s*' + key + '\\s*\\}\\}', 'gm'), this.opt.data[key]);
        Observer.target = child;
        this.opt.data[key];
        Observer.target = null;
      } else if (child.firstElementChild) {
        this.compile(child);
      }
    });
  }
};

class Observer {
  constructor() {
    this.subNode = [];
  }
  addSubNode(node) {
    this.subNode.push(node);
  }
  update(newVal) {
    this.subNode.forEach(node => {
      node.innerHTML = newVal;
    });
  }
}