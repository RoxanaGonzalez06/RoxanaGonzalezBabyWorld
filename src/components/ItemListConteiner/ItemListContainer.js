import React, {useState, useEffect} from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

const Products = [
  {id: 1, name:'Body Polera', price:'$1.300', description:'Body cuello polera de manga larga, varios colores. 100% algodón.',
  img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/babysuinvierno2021_223-0f5a0e29a7ad8aa77f16293305459772-320-0.jpg'},
  {id: 2, name:'Body Abrazo', price:'$1.700', description:'Body manga larga de interlock con bordado y aplique, 100% algodón.', 
  img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/babysuonline2020_04111-ef54bca1e2d69de33f16275898840315-320-0.jpg'},
  {id: 3, name:'Body Bear Hug', price:'$1.600', description:'Body de invierno estampado de manga larga, 100% algodón.', 
  img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/6132-babysusw20_0471-c0309806acb0f68c7516182679954745-320-0.jpg'},
  {id: 4, name:'Combo Bodies X3', price:'$4.500', description:'Combo de 3 body cuello redondo de manga larga, estampados varios. 100% algodón.',
  img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/babysuinvierno2021_1171-d7f11be6780e4ddd1716198416600359-320-0.jpg'},
  {id: 5, name:'Body Vestidito Warrior', price:'$1.790', description:'Body manga corta, de interlock con faldita y bordado. 100% algodón.', 
  img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/bs-ss17_1461-9b2c6eb4c1a488ad1316025480213522-320-0.jpg'},
  {id: 6, name:'Body Petit', price:'$1.980', description:'Body color celeste de interlock con cuello baby bordado, 100% algodón.', 
  img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/babysu-2022_2761-bf3575b3e44aa8301d16586242391626-320-0.jpg'},
  {id: 7, name:'Body Jazmín', price:'$1.490', description:'Body de interlock, estampado con brillitos. Colores disponibles: Gris y Rosa. 100% algodón.',
img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/babysusw17_008-021-ecb2121c70e986f29016257012417400-320-0.jpg'}
]

const ItemListContainer = ({greeting}) => {
  const [data, setData] = useState([]);

    useEffect(() =>{
      const getData = new Promise(resolve =>{
        setTimeout(()=>{
          resolve(Products);
        }, 3000)
      })
      getData.then(res => setData(res));
    }, [])
  
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