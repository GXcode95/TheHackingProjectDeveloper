import React from 'react'

const Alphabet = ({charlist, onPlay}) => {
    

  return (
    <div>
      {charlist.map( (char, i) => (
        <button onClick={onPlay} key={i}>{char}</button>
      ))}
    </div>
  )
  
}

export default Alphabet