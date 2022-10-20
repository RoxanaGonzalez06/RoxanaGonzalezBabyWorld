import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart';
import Contact from '../Contact/Contact'

const Cart = () => {
  const {cart, totalPrice} = useCartContext();
  const [counter, setCounter] = useState(0);

    const handlerCounterUp= ()=>{
        setCounter(counter + 1);
    }

  // const order = {
  //   buyer: {
  //     user: '',
  //     email: '',
  //     phone: '',
  //     addres: ''
  //   },
  //   items: cart.map(product => ({ id: product.id, name: product.name, preice: product.price, quantity: product.quantity })),
  //   total: totalPrice(),
  // }

  // const handleClik = () => {
  //   const db = getFirestore();
  //   const ordersCollection = collection (db, 'orders');
  //   addDoc(ordersCollection, order)
  //   .then(({ id })=> console.log(id))
  // }

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
      {counter > 0 ? <Contact /> : <button onClick={handlerCounterUp}>Realizar Compra</button>
      }
    </>
  )
}

export default Cart