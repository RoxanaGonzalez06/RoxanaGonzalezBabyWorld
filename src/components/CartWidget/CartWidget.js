import React from 'react'
import Button from '@mui/material/Button';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Stack from '@mui/material/Stack';

const CartWidget = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button 
        variant="contained" 
        startIcon={<ShoppingCartSharpIcon />}
        color='warning'>
          Carrito
      </Button>
    </Stack>
  )
}

export default CartWidget