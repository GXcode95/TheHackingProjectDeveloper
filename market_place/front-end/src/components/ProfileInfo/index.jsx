import React from 'react'
import { Typography, Box, Avatar, Stack } from '@mui/material';
import { Image } from 'cloudinary-react';
import { cloudName } from 'config/cloudinary.js';

const ProfileInfo = ({ profile }) => {

  const [username, setUsername] = React.useState('')

  React.useEffect(
    () => {
      if (profile.username)
        setUsername(profile.username[0])
      return;
    }, [profile]
  )

  return (
    <Box>
      <Typography variant="h2" color="primary" component="p">
        Profile
      </Typography>
      <Stack direction="row" spacing={2}>
        {
          profile.img_id ?
            <Image
              cloudName={cloudName}
              publicId={profile.img_id}
              width="300"
              crop="scale"
            />
            :
            <Avatar sx={{ bgcolor: "blue" }}>
              {username}
            </Avatar>
        }
      </Stack>
      <Typography variant="h6" component="p">
        Username: {profile.username}
      </Typography>
      <Typography variant="h6" component="p">
        Email: {profile.email}
      </Typography>
    </Box >
  )
}

export default ProfileInfo
