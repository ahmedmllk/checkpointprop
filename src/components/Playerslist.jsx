import React from 'react'
import Player from './Player'
const Playerslist = ({playerslist}) => {
  return (
    <div className='container'>
      {playerslist.map(el=><Player el={el}/>)}
    </div>
  )
}

export default Playerslist
