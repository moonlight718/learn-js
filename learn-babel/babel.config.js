const presets= [
  [
    '@babel/preset-env',
    {
      debug: true
    }
  ]
];

const plugins = ['@babel/plugin-proposal-class-properties', [
  '@babel/plugin-transform-runtime', {
    corejs: 3
  }
]];

// babel 把 es6的标准分为syntax和built-in两种类型。syntax就是语法，比如const => ,默认被Babel转译的就是syntax的类型。
// 对于那些可以通过改写覆盖语法的就认为是built-in，includes和Promise属于built-in
// Babel默认只转译syntax类型，对于built-in类型需要通过@babel/polyfill来完成转译。polyfill目前已经被废弃，使用core-js替代
module.exports = {
  presets,
  plugins
};