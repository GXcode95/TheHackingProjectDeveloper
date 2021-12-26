import React from 'react'
import Author from 'components/Books/Author'
import Button from 'components/Books/Button'
const Card =({book}) => {

  const toggleFav = () => {
    book.isFav === true ? book.isFav = false : book.isFav = true
  }
  const toggleToRead = () => {
    book.read === true ? book.read = false : book.read = true
  }
  
  return (
    <div className="Card">
      <h2>{book.title}</h2>
      <img src={book.thumbnailUrl} alt="book cover" />

      <Button onSort={toggleFav} value="Favori" />
      <Button onSort={toggleToRead} value="À lire" />
      
      <p> Writtren by : 
        {book.authors.map((author,i) =>(
          <Author key={i} name={author} />
        ))}
      </p>
    </div>
  )
}
export default Card;