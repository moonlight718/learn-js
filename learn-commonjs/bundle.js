(function(modules){
  // 已经加载过的模块
  var installedModules = {};

  var require = function (moduleName) {
    if (installedModules[moduleName]) {// 已经有缓存
      return installedModules[moduleName].exports;
    }

    // 没有加载过
    var module = installedModules[moduleName] = {
      moduleName: moduleName,
      exports: {}
    };

    modules[moduleName].call(module.exports, module, module.exports,require);

    return module.exports;
  }

  require('c.js');

})(
  {
    'a.js': function(module, exports, require) {
      let name = 'a';
      exports.name = name;
      exports.getName = function() {return name};
    },
    'b.js': function(module, exports, require) {
      let a = require('a.js');
      console.log('a.name', a.name); // a + c
      a.name = 'a+b';
      console.log('changed a.name', a.name); // a + b
      console.log('changed a.name', a.getName()); // a
      exports.name = 'b';
      exports.getname = function() {
        return name;
      };
    },
    'c.js': function(module, exports, require) {
      let a = require('a.js');
      console.log('c a.name', a.name); // a
      a.name = 'a+c';
      console.log('c changed a.name', a.name); // a + c
      console.log('c changed a.name', a.getName()); // a
      let b = require('b.js');
      console.log('b.name', b.name); // b
    }
  },
);