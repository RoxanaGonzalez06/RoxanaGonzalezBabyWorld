import './Cart.css';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart';
import BuyerContact from '../BuyerContact/BuyerContact'

const Cart = () => {
  const {cart, totalPrice} = useCartContext();
  const [counter, setCounter] = useState(0);

    const handlerCounterUp= ()=>{
        setCounter(counter + 1);
    }

  if (cart.length === 0){
      return(
        <>
          <p className='message'>No hay productos es su carrito de compra!</p>
          <div className='boton'>
          <Link to='/'>Ir a Productos</Link>
          </div>
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
      {counter > 0 ? <BuyerContact /> : <button onClick={handlerCounterUp}>Realizar Compra</button>
      }
    </>
  )
}

export default Cart