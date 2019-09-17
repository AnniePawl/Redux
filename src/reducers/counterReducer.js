import { INCREMENT, DECREMENT, RESET } from '../actions'

const counterReducer = (state = [5, 33, 11], action) => {
  const newState = [...state]
  switch(action.type) {
    case INCREMENT:
      newState[action.payload.index] += action.payload.val
      return newState

    case DECREMENT:
      newState[action.payload.index] -= action.payload.val
      return newState

    case RESET: 
      newState[action.payload.index] = action.payload.val
      return newState

    default: 
      return state

  }
}

export default counterReducer
