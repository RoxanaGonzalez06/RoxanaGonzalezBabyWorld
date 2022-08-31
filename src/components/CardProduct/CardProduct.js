import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';


const CardProduct = ({name, price, description,img}) => {

    const onAdd = (quantity) =>{
        console.log (`Agregaste a tu carrito de compras ${quantity} unidades`)
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="400"
                image={img}
                alt="imagen del producto"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
            <ItemCount
                initial={0}
                stock={10}
                onAdd={onAdd}
            />
            </CardContent>
        </CardActionArea>
        </Card>
    );
    }

export default CardProduct;