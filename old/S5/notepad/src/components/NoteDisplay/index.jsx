import React from 'react'

const NoteDisplay = ({title, text}) => {

  return(
    <div className="note-display">
      <h2>{title}</h2>
      <h1>salut</h1>
      <div dangerouslySetInnerHTML={text} />
    </div>
  )
}

export default NoteDisplay
