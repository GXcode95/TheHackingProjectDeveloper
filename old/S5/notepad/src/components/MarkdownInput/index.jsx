import React from 'react'

const MarkdownInput = ({text, title, onTitleChange, onTextChange, onClick}) => {

  return (
    <div className="markdown-input">
      <input type="text" name="title" value={title} onChange={onTitleChange}></input> 
      <textarea name="content" value={text} onChange={onTextChange} ></textarea>
      <button onClick={onClick}>Sauvegarder</button>
    </div>
  )
}
export default MarkdownInput