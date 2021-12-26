import React from 'react';
import ReactDOM from 'react-dom';
import NoteDisplay from 'components/NoteDisplay'
import NoteMenu from 'components/NoteMenu'
import MarkdownInput from 'components/MarkdownInput'
import Showdown from 'showdown'
import './index.css'
const converter = new Showdown.Converter();

const App = () => {
  const [current, setCurrent] = React.useState({"title": "votre titre",  "text": "votre text", "id": localStorage.length})
  const [noteList, setNoteList] = React.useState([])


  const handleTextChange = (e) => {
    setCurrent({
      "title": current.title,
      "text": e.target.value,
      "id": current.id,
    })
  }

  const handleTitleChange = (e) => {
    setCurrent({
      "title": e.target.value,
      "text": current.text,
      "id": current.id,
    })
  }

  const handleSaveClick = (e) => {

    localStorage.setItem(`${current.id}`, JSON.stringify(current))
    setNoteList(noteList.concat([current]))
  }

  const handleCurrentNote = (note) => {
    setCurrent(note)
  }
  const handleNewNote = () => {
    setCurrent({"title": "votre titre",  "text": "votre text", "id": localStorage.length})
  }
  function createMarkup(text) {
    return {__html: converter.makeHtml(text)};
  }
  React.useEffect(
    ()=> {
      let tmpList = []
      Object.keys(localStorage).forEach( key => tmpList.push(JSON.parse(localStorage[key])))
      setNoteList(tmpList)

    },[]
  )


  React.useEffect(
    () => {
      
      converter.makeHtml(current.text)

    }, [current.text]
  )
  
  return (
    <div className="app">
      <div className="left">
        <NoteMenu noteList={noteList} 
          onNoteClick={handleCurrentNote} 
          onNewNote={handleNewNote} 
          createMarkup={createMarkup}
        />
      </div>
      <div className="right">
        <NoteDisplay title={current.title} text={createMarkup(current.text)} />
        
        <MarkdownInput text={current.text} title={current.title}
          onTextChange={handleTextChange} 
          onTitleChange={handleTitleChange}
          onClick={handleSaveClick}
        />
      </div>
      {/* {localStorage.clear()} */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

