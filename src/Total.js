import React from 'react'
import { connect } from 'react-redux'


function Total(props) {
  const total = props.counters.reduce((acc, val) => acc + val)
  return (
    <div>
      <h1>Total:{total}</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { counters: state.counters }

}

export default connect(mapStateToProps)(Total)