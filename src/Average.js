import React from 'react'
import { connect } from 'react-redux'


function Average(props) {
  const average = props.counters.reduce((acc, val) => acc + val)
  return (
    <div>
      <h1>Average:{average}</h1>
    </div>
  )
}


const mapStateToProps = (state) => {
  return { counters: state.counters }

}

export default connect(mapStateToProps)(Average)