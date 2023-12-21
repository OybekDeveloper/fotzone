import React from 'react'
// import { useLocation } from 'react-router-dom'


const Leagues = (props) => {
    console.log(props.props)
  return (
    <div>
        {props.props.league_name}
    </div>
  )
}

export default Leagues