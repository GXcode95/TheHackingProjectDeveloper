import React from 'react'
import Case from 'components/Case'

const HangWord = ({word, entry}) => {
  const charList = word.split('')
  const [entryList, setEntryList] = React.useState("") 
  const validCharList = charList.map((char)=> {
    // si char dans charlist
    // on l'ajoute a validCharList
    if (entry == char)
      return  char;
    else
      return "_";
  })
  console.log(validCharList)


  return (
    <h2>
      
    {charList.map( (char, i) => {
      // SI char est dans ValidCarlist alors
      // on mets le char
      // sinon
      // on mets un underscore


      return (
        <Case char={'_'} key={i}/>
      )
    })}
    </h2>
  )
}

export default HangWord;