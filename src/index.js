import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createStore } from 'redux'

// actions -> increment, decriment
const increment = () => {
  return {
    // type は大文字にするのが一般的
    type: 'INCREMENT',
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}

// reducer -> action と以前の state を組み合わせて更新する
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
  }
}

// store
let store = createStore(counterReducer)

// コンソールに新しい状態を出力
store.subscribe(() => console.log(store.getState()))

// dispatch
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
