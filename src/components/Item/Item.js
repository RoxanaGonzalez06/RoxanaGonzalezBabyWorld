import {Link} from 'react-router-dom';
import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

  function Item ({info}) {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>  
            <Link to={`/detalle/${info.id}`} className='containerP'>
              <CardMedia
                component="img"
                height="400"
                image={info.img}
                alt="Imagen del Producto"/>     
            </Link>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {info.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {info.description}
              </Typography>
            </CardContent>
        </CardActionArea>
      </Card>

  );
}

export default Item