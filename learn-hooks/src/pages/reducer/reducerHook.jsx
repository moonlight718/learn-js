import React, { useReducer } from 'react';
import './reducerHook.less';
const initialState = { count: 0 };

function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      return initialState;
  }
}

export default function reducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="reducer">
      count: { state.count }
      <button onClick={() => {dispatch({type: 'increment'})}}>增加</button>
      <button onClick={() => {dispatch({type: 'decrement'})}}>减少</button>
      <button onClick={() => dispatch({type: 'init'})}>复原</button>
    </div>
  );
}