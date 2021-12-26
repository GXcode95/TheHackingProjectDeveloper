import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import AvatarDropdown from 'components/navigation/NavBar/AvatarDropdown'
import LoginButton from 'components/buttons/LoginButton';


const NavBar = ()  => {
  const user = useSelector(state => state.userReducer.user)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Typography variant="h3" component="div"  sx={{ mr: 4 }} align="center">
          Immobills
        </Typography>
        <Box position="absolute" right="10px" top="7px">
          {
            user && user.id ?
            <AvatarDropdown /> : <LoginButton /> 
          }
        </Box>
      </AppBar>
    </Box>
  );
}
export default NavBar;