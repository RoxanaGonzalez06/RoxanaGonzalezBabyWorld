import React, {useState, useEffect} from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
  const [data, setData] = useState([]);

  const {productosId} = useParams ();

    useEffect(() =>{
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'products');
      if (productosId){
        const queryFilter = query (queryCollection, where ('category', '==', productosId))
        getDocs (queryFilter)
          .then( res => setData (res.docs.map (product => ({ id: product.id, ...product.data() }))))
      } else {
        getDocs (queryCollection)
          .then( res => setData (res.docs.map (product => ({ id: product.id, ...product.data() }))))
      }
      }, [productosId])
  
    return (

    <div className='cuerpo'>

      <h1>Baby WORLD</h1>
      <h2>{greeting}</h2>
        <div className='productos'>
          <ItemList data={data}/>
        </div>
    </div>
  )
}

export default ItemListContainer