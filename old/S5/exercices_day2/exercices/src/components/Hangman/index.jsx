import React from 'react'
import Alphabet from 'components/Alphabet'
import HangWord from 'components/HangWord'

const Hangman = () => {
  const [word, setWord] = React.useState("")
  const [entry , setEntry] = React.useState("")
  let charlist = [
    "A","B","C","D","E","F","G","H","I","J","K",
    "L","M","N","O","P","Q","R","S","T","U","V",
    "W","X","Y","Z"
  ]

  const play = (e) => {
    let choice = e.target.innerHTML
    console.log(choice)
    e.target.style.display = "none";
    setEntry(choice)
  }

  
  React.useEffect(
    ()=> {
      async function fetchWord() {
        const response = await fetch("https://random-word-api.herokuapp.com/word?number=1")
        const randomWord = await response.json()
        setWord(randomWord[0].toUpperCase())
        
      }
      fetchWord();
    }, []
  )


  return (
    <div>
      <p>The word is {word}</p>
      <HangWord word={word} entry={entry} />
      <Alphabet charlist={charlist} onPlay={play}/>
    </div>
  )
  
}

export default Hangman