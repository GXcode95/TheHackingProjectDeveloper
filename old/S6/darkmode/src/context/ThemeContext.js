import React, { createContext, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

export const ThemeContext = createContext()

const darkTheme = createTheme({
  palette: {
      mode: "dark"
  }
})
const lightTheme = createTheme({
  palette: "light"
})

const ThemeContextProvider = (props) => {
  const [theme,setTheme] = useState(true)

  const toggleTheme = () => {
    setTheme(!theme)
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <CssBaseline />

        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
