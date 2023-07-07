import { combineReducers } from 'redux'
import counterReducer from './couter'
import isLoginReducer from './isLogin'

const reducer = combineReducers({
  counter: counterReducer,
  isLogin: isLoginReducer,
})

export default reducer
