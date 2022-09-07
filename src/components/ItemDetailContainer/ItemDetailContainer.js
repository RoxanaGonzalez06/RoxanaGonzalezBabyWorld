import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const Products = {id: 1, name:'Body Polera', price:'$1.300', description:'Body cuello polera de manga larga, varios colores. Tenemos en todos los talles. 100% algodón.',
img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/babysuinvierno2021_223-0f5a0e29a7ad8aa77f16293305459772-320-0.jpg'};

const ItemDetailContainer = () => {
  const [data, setData] = useState ({});

  useEffect(()=> {
    const getData = new Promise(resolve =>{
        setTimeout(()=>{
          resolve(Products);
        },3000);
    });
    getData.then(res=>setData(res));
  }, [])

  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer