import RealEstateForm from 'components/forms/profileForms/RealEstateForm';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import APIManager from 'services/Api'
import ProfileInfo from 'components/ProfileInfo';
import RealEstateList from 'components/RealEstateList';
import { Card, CardContent } from '@mui/material';
import FilesDropZone from 'components/upload/FileDropzone'

const Profile = () => {
  const userStore = useSelector(state => state.userReducer)
  const [profile, setProfile] = useState('')
  const [realEstates, setRealEstates] = useState()
  const { id } = useParams()


  useEffect(
    () => {
      const fetchUserProfile = async () => {
        const userID = id || userStore.user.id
        const response = await APIManager.getUserProfile(userID)
        setProfile(response.user)
        setRealEstates(response.real_estates)
      }
      if (userStore.user) {
        fetchUserProfile()
      }
    },
    [userStore, id]
  )

  return (
    <div className="Profile">
      <h2>Profile</h2>
      {console.log(userStore)}
      <Card >
        <CardContent>
          <FilesDropZone />
        </CardContent>
      </Card>
      <ProfileInfo profile={profile} />
      <h2>New Real Estate</h2>
      <RealEstateForm />
      <RealEstateList list={realEstates} />
    </div>
  );
};

export default Profile;