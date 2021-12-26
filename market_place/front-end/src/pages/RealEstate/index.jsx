import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import APIManager from 'services/Api';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const RealEstate = () => {

  const cities = useSelector(state => state.citiesReducer.cities)
  const [city, setCity] = React.useState()
  const [data, setData] = useState({
    realEstate: {
      name: "",
      description: "",
      price: ""
    },
    user: {
      username: "",
      email: ""
    }
  })
  const realEstateID = useParams().id

  const fetchRealEstate = async () => {
    const response = await APIManager.showRealEstate(realEstateID)
    console.log(response)
    setData(response)
  }

  const getCityInfos = (id) => {
    for (let city of cities)
      if (city.id === id)
        setCity(city)
  }

  useEffect(() => {
    if (data.realEstate.city_id)
      getCityInfos(data.realEstate.city_id)
    return;
  }, [data]
  )

  useEffect(() => {
    fetchRealEstate()
  },
    []
  )

  return (
    <div>

      <Typography variant="h2" component="h1">
        {data.realEstate.name}
      </Typography>
      <Typography variant="h6" component="p">
        {data.realEstate.description}
      </Typography>
      <Typography variant="p" component="p">
        Prix: {data.realEstate.price}€
      </Typography>
      {city !== undefined ?
        <Typography variant="p" component="p">
          Ville: {city.name}, Zip: {city.zip_code}
        </Typography> :
        ''}

      <Typography variant="h6" component="p">
        Vendeur: {data.user.username}
      </Typography>
      <Typography variant="h6" component="p">
        E-mail: {data.user.email}
      </Typography>
    </div>
  );
};

export default RealEstate;
