import React, { useContext } from 'react'
import { ThemeContext } from 'context/ThemeContext'
const Header = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <header className={theme ? 'Header go-light' : 'Header go-dark'}>
      <h1>Portfolio de John Doe</h1>
      <a href="https://github.com/GXcode95">@Github</a>
    </header>
  )
}
    
export default Header
