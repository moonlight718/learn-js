// effect hook 与 componentDidMount componentDidUpdate componentWillUnmount 具有相同的用户
import React, { useState, useEffect } from 'react';
import './EffectHook.less';

export default function EffectHook() {
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate
  // 在完成DOM更改后运行我的“副作用”
  // 可以通过一个返回函数来清除副作用
  useEffect(() => {
    document.title = `you clicked ${count} times`;
    return () => {
      // 在组件销毁时执行
    };
  },[count]);

  return (
    <div className="effect">
      <p>you clicked {count} times</p>
      <button onClick={() => {setCount(count + 1)}}>Click me</button>
    </div>
  );
}