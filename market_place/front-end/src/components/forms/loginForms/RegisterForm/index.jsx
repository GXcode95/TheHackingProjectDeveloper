import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserRequest, fetchUserError, fetchUserRegisterSuccess } from 'store/user/actions'
import APIManager from 'services/Api'
import { Button, Box, Stack, TextField } from '@mui/material'

const RegisterForm = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [username, setUsername] = useState('')
  const user = useSelector(state => state.userReducer)

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(fetchUserRequest())
    const response = await APIManager.registerUser(email, password, passwordConfirmation, username)
    response.status = 200 ?
      dispatch(fetchUserRegisterSuccess(response.user)) :
      dispatch(fetchUserError(response.error))
    console.log("LA REPONSE EST =>", response)

  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Stack spacing={4} >
        {console.log(user)}
        <TextField
          label="Email" id="email-input" type="email"
          variant="outlined" required
          onChange={e => setEmail(e.target.value)}
        />

        <TextField
          label="Password" id="password-input" type="password"
          variant="outlined" required
          onChange={e => setPassword(e.target.value)}
        />

        <TextField
          label="Confirmation" id="confirmation-input" type="password"
          variant="outlined" required
          onChange={e => setPasswordConfirmation(e.target.value)}
        />

        <TextField
          label="Username" id="username-input"
          variant="outlined" required
          onChange={e => setUsername(e.target.value)}
        />

        <Box display="flex" justifyContent="center">
          <Button variant="contained" color="primary" type="submit">
            Valider
          </Button>
        </Box>
      </Stack>
    </form>
  )
}

export default RegisterForm
