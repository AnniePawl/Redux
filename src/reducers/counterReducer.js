import { INCREMENT, DECREMENT, RESET, RESET_ALL } from '../actions'

const counterReducer = (state = [5, 33, 11], action) => {
  const newState = [...state]
  switch (action.type) {

    case RESET_ALL:
      return newState.map(item => 0)

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
