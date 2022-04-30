import React from 'react'
import './FollowRow.css'

function FollowRow( {a,b} ) {
  return (
    <div className='followrow'>
      <div className="topic">
       <h4>{a}</h4>
       <h5>{b}</h5>
      </div>
     <button className='btn'>follow</button>
    </div>
  )
}

export default FollowRow