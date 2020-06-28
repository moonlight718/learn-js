import React, { useReducer, useCallback } from 'react';
import './reducerHook.less';

function init(initialCount) {
  return { count: initialCount };
}
function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

export default function reducerHook({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  const memoizedCallback = useCallback(() => {
    console.log(state.count);
  }, [state.count]);

  return (
    <div className="reducer">
      count: { state.count }
      <button onClick={() => {dispatch({type: 'increment'})}}>增加</button>
      <button onClick={() => {dispatch({type: 'decrement'})}}>减少</button>
      <button onClick={() => dispatch({type: 'reset', payload: initialCount})}>复原</button>
    </div>
  );
}