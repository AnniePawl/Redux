import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from './actions'
import Counter from './Counter'

const CounterList = (props) => {

  return (
    <div>
      {props.counters.map((count, i) => {
        return (
          <Counter 
            count={count} 
            increment={() => props.increment(i, 4)}
            decrement={() => props.decrement(i, 4)}
            reset={() => props.reset(i, 0)}
          />)
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { counters: state.counters }
}

const mapDispatchToProps = () => {
  return { increment, decrement, reset }
}

export default connect(mapStateToProps, mapDispatchToProps())(CounterList)

// const intermediatefunction =  connect(mapStateToProps, mapDispatchToProps())
// const finalComponent = intermediatefunction(CounterList)
// export default finalComponent