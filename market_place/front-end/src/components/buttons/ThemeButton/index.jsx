import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from 'store/theme/actions'
import { IconButton } from '@mui/material';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import Brightness3RoundedIcon from '@mui/icons-material/Brightness3Rounded';
const ThemeButton = () => {
  const theme = useSelector(state => state.themeReducer.theme.palette.mode)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(toggleTheme())
  }
  return (
    <IconButton onClick={handleClick}>
      {theme === 'light' ?  <WbSunnyRoundedIcon color='warning'/> :
        <Brightness3RoundedIcon color='secondary' /> }
    </IconButton>
  )
}
    
export default ThemeButton
