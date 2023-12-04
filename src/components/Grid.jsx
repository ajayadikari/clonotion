import React from 'react'

const Grid = ({num, desc}) => {
  return (
    <div className='grid'>
      <h1>{num}+</h1>
      <p>{desc}</p>
    </div>
  )
}

export default Grid
