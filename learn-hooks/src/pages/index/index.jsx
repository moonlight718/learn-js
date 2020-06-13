import React, { useState } from 'react';

export default function Index() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);
  return (
    <div>
      <div>you click {count} times</div>
      <div> my age is { age } </div>
      <button onClick={() => {setCount(count + 1)}}>click</button>
      <button onClick={() => {checkAndSetAge(setAge, age)} }>changeAge</button>
    </div>
  );
}
function checkAndSetAge (setAge, age) {
  setAge(age * 2);
}