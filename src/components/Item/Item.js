import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';

import {Link} from 'react-router-dom';

function Item ({info}) {  
    const onAdd = (quantity) =>{
      console.log (`Agregaste a tu carrito de compras ${quantity} unidades`)
    }
  
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
              <ItemCount initial={0} stock={10} onAdd={onAdd}/>
            </CardContent>
        </CardActionArea>
      </Card>

  );
}

export default Item