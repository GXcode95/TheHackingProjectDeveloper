import React, { useContext } from 'react'
import './BtnToggle.css'
import ThemeContextProvider, { ThemeContext } from 'context/ThemeContext'

const BtnToggle = () => {
  const {toggleTheme, theme} = useContext(ThemeContext)

  return (
    <button onClick={toggleTheme} className={theme ? "btn-toggle go-light" : "btn-toggle go-dark"}>
      {theme ? "Dark" : "Light"}
    </button>
  )
}
    
export default BtnToggle
