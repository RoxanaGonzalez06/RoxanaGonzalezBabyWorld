import './ItemDetail.css'
import React, {useState} from 'react'
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) =>{
        setGoToCart(true);
        addProduct(data, quantity)
      }
  return (
        <div className='contDetailP'>
            <h3>Detalle</h3>
            <img className='imgP' src={data.img} alt=""/>
            <div className='detailP'>
                <h2>{data.name}</h2>
                    <h3>{data.price}</h3>
                    <p>{data.description}</p>
                {
                    goToCart
                    ? <Link to='/carrito'>Agregar al Carrito</Link>
                    : <ItemCount initial={0} stock={10} onAdd={onAdd}/>
                }
            </div>
        </div>
  )
}

export default ItemDetail