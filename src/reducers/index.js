import { combineReducers } from 'redux'
import counterReducer from './counterReducer'

// { counter: 0, profile: {}, currentItem: id }

const reducers = combineReducers({
  counters: counterReducer
})

export default reducers
