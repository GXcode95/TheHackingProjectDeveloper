import React from 'react'

const NoteMenu = ({noteList, onNoteClick, onNewNote, createMarkup}) => {

  return (
    <div className="note-list">
      <button onClick={onNewNote}>Nouvelle Note</button>
      {noteList.map((note, i) => (
        <div key={i}>
          <h2 onClick={() => {onNoteClick(note)}}>{note.title}</h2>
          <p dangerouslySetInnerHTML={createMarkup(note.text)}></p>
        </div>
      ))}
    </div>
  )
}

export default NoteMenu