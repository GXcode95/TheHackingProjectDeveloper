import React, {useState} from 'react';
import { Box, Button, Stack, TextField } from '@mui/material'
import APIManager from 'services/Api';
import MultipleFilesDropzone from 'components/upload/MultipleFilesDropzone';

const RealEstateForm = () => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState('');
  const [uploadedFilesID, setUploadedFilesID] = useState([])
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('name', name);
    formData.append('price', price);
    formData.append('sold', false);
    formData.append('description', description);
    formData.append('user_id', 2);
    formData.append('city_id', 1);
    formData.append('image_url', uploadedFilesID)

    const response = await APIManager.createRealEstate(formData);
  }

  return (
    <Box className="RealEstateForm">
      <Stack spacing={4} >

        <TextField
          label="Name" id="name-input" type="text"
          variant="outlined" required
          onChange={e => setName(e.target.value)}
        />

        <TextField
          label="Price" id="price-input" type="number"
          variant="outlined" required
          onChange={e => setPrice(e.target.value)}
        />

        <TextField
          label="Description" id="description-input" type="text"
          variant="outlined" required
          onChange={e => setDescription(e.target.value)}
        />

        <Box 
          width="50%" height="150px" align="center"
          sx={{border: "1px dotted grey", alignSelf: "center"}} 
        >
        <MultipleFilesDropzone
          setUploadedFilesID={setUploadedFilesID}
          uploadedFilesID={uploadedFilesID}
          />
        </Box>

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>

      </Stack>
    </Box>
  );
};

export default RealEstateForm;