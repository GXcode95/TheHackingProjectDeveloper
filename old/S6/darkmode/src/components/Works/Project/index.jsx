import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ThemeContext } from 'context/ThemeContext'
const Project = ({project}) => {
  const {theme} = React.useContext(ThemeContext)

  return (
    <div className={theme ? 'Project go-light' : 'Project go-dark'}>
      <Card sx={{ maxWidth: 400, }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={project.img}
            alt="Project screenshot"
          />
          <CardContent className={theme ? "go-light" : "go-dark"}>
            <Typography gutterBottom variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2">
              {project.content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}
    
export default Project
