import React from 'react';
// @ts-ignore
import { Header } from '@mfe/todo-styleguide'
// @ts-ignore
import { useStore } from '@mfe/todo-util-state'

export const App = () => {
  const store = useStore();
  console.log(store)
  return (
    <div>
      <Header />
    </div>
  )
}