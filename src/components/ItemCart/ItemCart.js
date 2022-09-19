import React from 'react'
import { useCartContext } from '../../context/CartContext'
import './itemCart.css'

const ItemCart = ({ product }) => {
    const {removeProduct} = useCartContext();
    console.log(product)
  return (
    <div className='itemCart'>
        <img src={product.img} alt={product.name} />
        <div>
            <p>Producto: {product.name}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio unidad: {product.price}</p>
            <p>Subtotal: ${product.quantity * product.price}</p>
            <button onClick={()=> removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart