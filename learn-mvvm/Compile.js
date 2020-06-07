// 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，将每个指令对应的节点绑定到更新函数
//  添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图
const updater = {
  textUpdater(node, value) {
    // 当绑定的那个值是空时，直接兜底空字符串
    node.textContent = value || '';
  },
  htmlUpdater(node, value) {
    node.innerHTML = value || '';
  },
  classUpdater(node, value, oldValue) {
    const className = node.className.replace(oldValue, '').replace(/\s$/, '');

    const space = className && String(value) ? ' ' : '';

    node.className = className + space + value;
  },
  modelUpdater(node, value) {
    node.value = value || '';
  }
};

const compileUtil = {
  eventHandler(node, vm, exp, dir) {
    const eventType = dir.split(':')[1];
    fn = vm.$options.methods && vm.$options.methods[exp];

    if (eventType && fn) {
      // 事件回调函数中fn的this始终指像vm
      node.addEventListener(eventType, fn.bind(vm), false);
    }
  },
  text(node, vm, exp) {
    this.bind(node, vm, exp, 'text');
  },
  html(node, vm, exp) {
    this.bind(node, vm, exp, 'html');
  },
  model(node, vm, exp) {
    this.bind(node, vm, exp, 'model');
    const val = this._getVMVal(vm, exp);
    node.addEventListener('input', (e) => {
      // debugger;
      const newValue = e.target.value;
      if (val === newValue) {
        return;
      }
      this._setVMVal(vm, exp, newValue);
    });
  },
  // class 参数不全
  class(node, vm, exp) {
    this.bind(node, vm, exp, 'class');
  },
  bind(node, vm, exp, dir) {
    const updateFn = updater[dir + 'Updater'];
    // 对于class而言，此处缺少参数
    updateFn && updateFn(node, this._getVMVal(vm, exp));

    // 添加观察者，当对应value发生变化时，通知视图进行更新
    new Watcher(vm, exp, (value, oldValue) => {
      updateFn && updateFn(node, value, oldValue);
    });
  },
  _getVMVal(vm, exp) {
    let val = vm;
    exp = exp.split('.');
    exp.forEach((k) => {
      val = val[k];
    });
    return val;
  },
  _setVMVal(vm, exp, value) {
    let val = vm;
    exp = exp.split('.');
    exp.forEach((k, i) => {
      if (i < exp.length - 1) {
        val = val[k];
      } else {
        val[k] = value;
      }
    });
  }
};


class Compile {
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = this.isElementNode(el) ? el: document.querySelector(el);
    if (this.$el) {
      this.$fragment = this.node2Fragment(this.$el);
      this.init();
      this.$el.appendChild(this.$fragment);
    }
  }
  isElementNode(node) {
    return node.nodeType === 1;
  }
  init() {
    this.compileElement(this.$fragment);
  }
  node2Fragment(el) {
    const fragment = document.createDocumentFragment();
    let child;
    // 将原生节点拷贝到fragment
    while (child = el.firstChild) {
      fragment.appendChild(child);
    }
    return fragment;
  }
  compileElement(el) {
    const childNodes = el.childNodes;
    [...childNodes].forEach((node) => {
      // 返回所有子节点的文本
      const text = node.textContent;
      const reg = /\{\{(.*)\}\}/; // 表达式文本
      if (this.isElementNode(node)) { // 如果是一个node节点则编译它的attribute
        this.compile(node);
      } else if (this.isTextNode(node) && reg.test(text)) {
        // 与正则表达式第一个匹配的字符串
        this.compileText(node, RegExp.$1);
      }
      // 遍历编译子节点
      if (node.childNodes && node.childNodes.length) {
        this.compileElement(node);
      }
    });
  }
  compile(node) {
    const nodeAttrs = node.attributes;
    [...nodeAttrs].forEach((attr) => {
      const attrName = attr.name;
      // 判断是否是一个指令
      if (this.isDirective(attrName)) {
        const exp = attr.value;
        const dir = attrName.substring(2);
        // 判断是否是一个事件
        if (this.isEventDirective(dir)) {
          compileUtil.eventHandler(node, this.$vm, exp, dir);
        // 普通指令
        } else {
          compileUtil[dir] && compileUtil[dir](node, this.$vm, exp);
        }
        // 移除指令属性
        node.removeAttribute(attrName);
      }
    });
  }
  compileText(node, exp) {
    compileUtil.text(node, this.$vm, exp);
  }
  // 判断是否是一个指令
  isDirective(attr) {
    return attr.indexOf('v-') === 0;
  }
  // 判断是否是一个事件
  isEventDirective(dir) {
    return dir.indexOf('on') === 0;
  }

  isTextNode (node) {
    return node.nodeType === 3;
  }

}

