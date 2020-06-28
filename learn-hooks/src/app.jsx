import React from 'react';
import Index from './pages/index/index';
import EffectHook from './pages/effect/EffectHook';
import ReducerHook from './pages/reducer/reducerHook';
import RefHook from './pages/ref/useRef';

export default function App() {
  return (
    <div>
      <Index />
      <EffectHook />
      <ReducerHook initialCount={10} />
      <RefHook />
    </div>
  );
}