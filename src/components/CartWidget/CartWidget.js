import React from 'react';
import { useCartContext } from '../../context/CartContext';

import Button from '@mui/material/Button';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Stack from '@mui/material/Stack';

const CartWidget = () => {
 const {totalProducts} = useCartContext();
  return (
    <Stack direction="row" spacing={2}>
      <Button 
        variant="contained" 
        startIcon={<ShoppingCartSharpIcon />}
        color='warning'>
          Carrito
          <span>{totalProducts()|| ''}</span>
      </Button>
    </Stack>
  )
}

export default CartWidget