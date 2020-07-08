import React from 'react'
import spinner from '../../img/spinner.gif'

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }} // Use style={{attributes}} for inline styling
      alt='Loading'
    ></img> 
  )
}

export default Spinner
