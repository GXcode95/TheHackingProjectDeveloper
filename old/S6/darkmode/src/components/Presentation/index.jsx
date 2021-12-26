import React, { useContext } from 'react'
import { ThemeContext } from 'context/ThemeContext'
  
const Presentation = () => {
  const {theme} = useContext(ThemeContext)
  
  return (

    <div className={theme ? 'Presentation go-light' : 'Presentation go-dark'}>
      <h2>Bonjour, je m'appelle John Doe. Bienvenue sur mon portfolio !</h2>
      <p>Depuis quelques mois, j'apprend le développement web grâce a The Hacking Project.
        J'ai ainsi pu apprendre à utiliser Ruby, Rails, Javascript et React.
      </p>
    </div>
  )
}
    
export default Presentation
