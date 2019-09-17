const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const RESET_ALL = 'RESET_ALL'
// const ADD_COUNTER = 'ADD_COUNTER'

const resetAll = () => {
  return {
    type: RESET_ALL
  }
}


const reset = (index, val = 0) => {
  return { type: RESET, payload: { index, val } }
}

const increment = (index, val = 1) => {
  return {
    type: INCREMENT,
    payload: { index, val }
  }
}

const decrement = (index, val = 1) => {
  return {
    type: DECREMENT,
    payload: { index, val }
  }
}

export { INCREMENT, DECREMENT, RESET, RESET_ALL, increment, decrement, reset, resetAll }
