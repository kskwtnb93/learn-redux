import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, login } from './actions'

function App() {
  const counter = useSelector((state) => state.counter)
  const isLogin = useSelector((state) => state.isLogin)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <p>カウント: {counter}</p>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
      <p>ログイン状況: {isLogin ? 'ログイン中' : '未ログイン'}</p>
      <button onClick={() => dispatch(login())}>
        {!isLogin ? 'ログイン' : 'ログアウト'}
      </button>
    </div>
  )
}

export default App
