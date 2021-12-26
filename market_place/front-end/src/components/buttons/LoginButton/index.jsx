import React from 'react'

import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
const LoginButton = () => {
  return (
    <Link to="/login">
      <Button 
        color="inherit"
        id="fade-button"
        sx={{ border: 1, BorderColor: 'error.success' }} 
        className="login-button"
      >
        Login
      </Button>
    </Link>
  )
}
    
export default LoginButton
