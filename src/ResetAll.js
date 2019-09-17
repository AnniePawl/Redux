import React from 'react'
import { connect } from 'react-redux'
import { resetAll } from './actions'

function ResetAll(props) {
  return (
    <button onClick={() => {
      props.resetAll()
    }}>
      Reset All
    </button>
  )
}


const mapDispatchToProps = () => {
  return { resetAll }


}

export default connect(undefined, mapDispatchToProps())(ResetAll)