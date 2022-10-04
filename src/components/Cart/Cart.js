import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
  const {cart, totalPrice} = useCartContext ();

  const order = {
    buyer: {
      user: 'Sebastian',
      email: 'sebastian.cosica@gmail.com',
      phone: '1124926135',
      addres: 'Thames 1234'
    },
    items: cart.map(product => ({ id: product.id, name: product.name, preice: product.price, quantity: product.quantity })),
    total: totalPrice(),
  }

  const handleClik = () => {
    const db = getFirestore();
    const ordersCollection = collection (db, 'orders');
    addDoc(ordersCollection, order)
    .then(({ id })=> console.log(id))
  }

  if (cart.length === 0){
      return(
        <>
          <p>No hay productos es su carrito</p>
          <Link to='/'>Ir a Productos</Link>
        </>
      );
  }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p>
        total: {totalPrice()}
      </p>
      <button onClick={handleClik}>Enviar orden de Compra</button>
    </>
  )
}

export default Cart