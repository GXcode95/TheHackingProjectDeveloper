import React from 'react';
import Card from 'components/Books/Card';
import SearchBar from 'components/Books/SearchBar';
import Button from 'components/Books/Button';

const Books = () => {
  const [bookList, setBookList] = React.useState([])
  const [bookToSearch, setBookToSearch] = React.useState(false)
  const [filteredBookList, setFilteredBookList] = React.useState([])
  const [favStatus, setFavStatus] = React.useState(false)
  const [readStatus, setReadStatus] = React.useState(false)
  React.useEffect(
    ()=> {
      fetch("https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json")
      .then(response => response.json())
      .then(response => {
          let tempList = []
          
          for(let book of response.books[0]) {
            tempList.push(book)
          }
          setBookList(tempList)
          setFilteredBookList(tempList)
        }
      )
    }, []);

  React.useEffect(
    () => {
      if(bookToSearch === "") {
        setFilteredBookList(bookList)
      }
      if(bookToSearch) { 
        let filtered = bookList.filter(book => book.title.includes(bookToSearch) || book.authors.includes(bookToSearch))
        setFilteredBookList(filtered)
      }

    }, [bookToSearch]
  )

  const sortFavorite = () => {
    if (favStatus === false) {
      let filtered = bookList.filter(book => book.isFav === true)
      setFavStatus(true)
      setFilteredBookList(filtered)
    } else {
      setFavStatus(false)
      setFilteredBookList(bookList)
    }
  }
  const sortToRead = () => {
    if (readStatus === false) {
      let filtered = bookList.filter(book => book.read === true)
      setReadStatus(true)
      setFilteredBookList(filtered)
    } else {
      setReadStatus(false)
      setFilteredBookList(bookList)
    }
  }

  const searchBook = (e) => {
    e.preventDefault()
    const input = e.target.firstChild.value
    setBookToSearch(input)
  }
    return (
      <div className="books">
        <SearchBar onSearch={searchBook}/>
        <Button onSort={sortFavorite} value="favoris"/>
        <Button onSort={sortToRead} value="À lire"/>
        <ul className="books-list">
          {filteredBookList.map((book,i)=> (
            <li key={i}>
               <Card book={book} />
            </li>
          ))}
        </ul>
      </div>
    )
    
};

export default Books;