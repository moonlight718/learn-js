"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var add = function add(a, b) {
  return a + b;
};

var Person = function Person() {
  (0, _classCallCheck2["default"])(this, Person);
  (0, _defineProperty2["default"])(this, "name", 'hesha');
  (0, _defineProperty2["default"])(this, "age", 18);
};

(0, _defineProperty2["default"])(Person, "a", 'a');
(0, _defineProperty2["default"])(Person, "b", void 0);
;
var arr = [1, 2];
var hasThree = (0, _includes["default"])(arr).call(arr, 3);
new _promise["default"]();