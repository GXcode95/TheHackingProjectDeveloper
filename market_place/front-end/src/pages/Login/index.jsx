import React, { useState } from 'react'
import RegisterForm from 'components/forms/loginForms/RegisterForm'   
import SignInForm from 'components/forms/loginForms/SignInForm'    
import {Box, Button, Typography} from '@mui/material'

const Login = () => {
  const [isRegistered, setIsRegistered] = useState(true)
  const toggleIsRegistered = () => {
    setIsRegistered(!isRegistered)
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="1em"
    >
      <Typography 
        variant="h2"
        component="p" 
        color="primary" 
        align="center" 
        mb="0.2em"  
      >
        { isRegistered ? "Sign In" : "Register" }
      </Typography>
      
      {isRegistered ? <SignInForm /> : <RegisterForm /> }
      
      <Button variant="text" color="primary" disableRipple
        onClick={toggleIsRegistered}
      >
        {isRegistered ? " Not subscribed yet ?" : "Already subscribed ?"}
      </Button>
    </Box>
  )
}
    
export default Login
