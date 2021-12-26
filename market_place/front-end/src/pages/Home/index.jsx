import React, { useEffect, useState } from 'react'
import RealEstateList from 'components/RealEstateList'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import APIManager from 'services/Api';

const Home = () => {
  const [list, setList] = useState(null)

  const HandleList = async () => {
    const response = await APIManager.showRealEstateList()
    setList(response.realEstate)
  }

  useEffect(() => {
    HandleList()
  },
    []
  )

  return (
    <Box>
      {process.env.REACT_APP_API_URL}
      <RealEstateList list={list} />
    </Box>
  )
}

export default Home
