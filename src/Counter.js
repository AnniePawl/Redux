import React from 'react'

const Counter = (props) => {
  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={() => props.decrement(1)}>Down</button>
      <button onClick={() => props.increment(1)}>Up</button>
      <button onClick={() => props.reset(0)}>Reset</button>
    </div>
  )
}

export default Counter
