import React from 'react'
import {Card, Box, CardActionArea, Typography} from '@mui/material'
const HeroBanner = () => {

  return (
    <Card sx={{mb:"3em"}}>
      <CardActionArea>
        <Box 
          width="100vw" 
          height="350px" 
          display= "flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            background:"url(https://tbcdn.talentbrew.com/company/117/FULL_v2_0/img/banner%20ny%20best%20places.jpg) no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}
        >
          <Typography 
            variant="h2" 
            sx={{fontSize: "2.1rem"}}
            align="center"
            color="primary"
            fontWeight="600"
            >
            Bienvenue sur Immobills<br /> venez vendre ou acheter vos biens!
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  )
}
    
export default HeroBanner
