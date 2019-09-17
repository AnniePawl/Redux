const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
// const ADD_COUNTER = 'ADD_COUNTER'

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

export { INCREMENT, DECREMENT, RESET, increment, decrement, reset }
