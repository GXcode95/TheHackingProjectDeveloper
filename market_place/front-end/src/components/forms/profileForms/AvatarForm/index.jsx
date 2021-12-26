import React from 'react';
import { Box, Button, Input } from '@mui/material'
import { useSelector } from 'react-redux';
import APIManager from 'services/Api';
import { useDispatch } from 'react-redux';
import { fetchUserAvatarSuccess, fetchUserError, fetchUserRequest } from 'store/user/actions';

const AvatarForm = () => {

  const [avatar, setAvatar] = React.useState('');
  const user = useSelector(state => state.userReducer.user);
  const currentAvatar = useSelector(state => state.userReducer.avatar);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('user_avatar', avatar);
    formData.append('user_id', user.id);

    dispatch(fetchUserRequest());
    const response = await APIManager.uploadAvatar(formData);
    console.log(response)
    if (response.error)
      dispatch(fetchUserError(response.error));
    else
      dispatch(fetchUserAvatarSuccess(response.user_avatar));
  }

  return (
    <Box className="AvatarForm">
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple={false} type="file" sx={{ display: 'none' }}
          onChange={(e) => setAvatar(e.target.files[0])} />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default AvatarForm;
