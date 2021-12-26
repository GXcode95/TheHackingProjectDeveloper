import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const RealEstateCard = (props) => {

  return (
    <>
      <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://media-exp1.licdn.com/dms/image/C4D03AQHHKJqY-bUPhQ/profile-displayphoto-shrink_200_200/0/1634143077072?e=1640217600&v=beta&t=4N_vUolW7uZkw5--F5njn3jQFP4V9ZpyidQap1Tb-E0"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.realEstate.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.realEstate.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.realEstate.price} €
            </Typography>
          </CardContent>
          <CardActions>
            <Button href={`/real_estate/${props.realEstate.id}`} size="small">Show</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default RealEstateCard;
