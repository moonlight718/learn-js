import React from 'react';
import Index from './pages/index/index';
import EffectHook from './pages/effect/EffectHook';
import ReducerHook from './pages/reducer/reducerHook';

export default function App() {
  return (
    <div>
      <Index />
      <EffectHook />
      <ReducerHook />
    </div>
  );
}