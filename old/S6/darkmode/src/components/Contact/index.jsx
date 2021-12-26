import React from 'react'
import { ThemeContext } from 'context/ThemeContext'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Contact = () => {
  const {theme} = React.useContext(ThemeContext)
  return (
    <div className={theme ? 'Contact go-light' : 'Contact go-dark'}>
      <p>Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste ou pour passer le temps pendant ce confinement ? 
        Remplissez le formulaire ci-dessous, je vous contacterai dès que je le peux.
      </p>
      <form>
          <TextField className={theme ? "go-light" : "go-dark"} required fullWidth
          id="outline-required" placeholder="Votre titre..." />
          <br />
          <br />
          <TextField className={theme ? "go-light" : "go-dark"} required fullWidth 
          id="outlined-multiline-static" multiline rows={10} placeholder="Votre message ..." />
          <br />
          <br />
          <Button type="submit" variant="outlined" color="success">Envoyer</Button>
      </form>
    </div>
  )
}
    
export default Contact
