import { combineReducers } from 'redux'

import mainReducer from './main'
import productReducer from './product'

export function createReducer (initialState, handlers) {
  return function reducer (state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

const appReducer = combineReducers({
  main: mainReducer,
  product: productReducer,
})

export default appReducer