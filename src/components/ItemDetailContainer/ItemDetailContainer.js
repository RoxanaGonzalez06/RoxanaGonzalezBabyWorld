import React, {useState, useEffect} from 'react';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';

// const ProductsDetail = [
//   {id: 1, name:'Body Polera', price:'1300', description:'Body cuello polera de manga larga, varios colores. 100% algodón.',
//   img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/babysuinvierno2021_223-0f5a0e29a7ad8aa77f16293305459772-320-0.jpg', category: 'nuevo'},
//   {id: 2, name:'Body Abrazo', price:'1700', description:'Body manga larga de interlock con bordado y aplique, 100% algodón.', 
//   img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/babysuonline2020_04111-ef54bca1e2d69de33f16275898840315-320-0.jpg', category: 'nuevo'},
//   {id: 3, name:'Body Bear Hug', price:'1600', description:'Body de invierno estampado de manga larga, 100% algodón.', 
//   img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/6132-babysusw20_0471-c0309806acb0f68c7516182679954745-320-0.jpg', category: 'nuevo'},
//   {id: 4, name:'Combo Bodies X3', price:'4500', description:'Combo de 3 body cuello redondo de manga larga, estampados varios. 100% algodón.',
//   img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/babysuinvierno2021_1171-d7f11be6780e4ddd1716198416600359-320-0.jpg', category: 'nuevo'},
//   {id: 5, name:'Body Vestidito Warrior', price:'1790', description:'Body manga corta, de interlock con faldita y bordado. 100% algodón.', 
//   img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/bs-ss17_1461-9b2c6eb4c1a488ad1316025480213522-320-0.jpg', category: 'nuevo'},
//   {id: 6, name:'Body Petit', price:'1980', description:'Body color celeste de interlock con cuello baby bordado, 100% algodón.', 
//   img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/babysu-2022_2761-bf3575b3e44aa8301d16586242391626-320-0.jpg', category: 'nuevo'},
//   {id: 7, name:'Body Jazmín', price:'1490', description:'Body de interlock, estampado con brillitos. Colores disponibles: Gris y Rosa. 100% algodón.',
//   img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/babysusw17_008-021-ecb2121c70e986f29016257012417400-320-0.jpg', category: 'nuevo'},
//   {id: 8, name:'Babucha Gatita', price:'1350', description:'Babucha bordada con aplique.Solo disponible en color rojo y en talle S. 100% algodón.',
//   img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/5575-babysuss19_0521-37c688598d8878dad216376103269493-320-0.jpg', category: 'sale'},
//   {id: 9, name:'Babucha Animal Print', price:'1690', description:'Babucha animal print con tul. Color Gris, disponibles en talla M y L. 100% algodón.', 
//   img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/5585-babysuss19_0631-3e208b2a3c647d41f516339905437729-320-0.jpg', category: 'sale'},
//   {id: 10, name:'Conjunto Service Station', price:'1750', description:'Conjunto estampado, musculosa y Shorcito con elastico en la cintura. 100% algodón.', 
//   img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/babysuverano2022_2721-7a5a014f3268c8be1c16398533772025-320-0.jpg', category: 'sale'},
//   {id: 11, name:'Set ZOO FULL', price:'2500', description:'!Super promo! Set enterito + gorrito + babero bordados, puro algodón. 100% algodón.',
//   img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/babysuinvierno2021_2261-78a082c821cbb4f52116618657286786-320-0.jpg', category: 'sale'},
//   {id: 12, name:'Body Vestido ISABELLA', price:'1890', description:'Body vestidito combinado con boladitos en color blanco. 100% algodón.', 
//   img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/bs-ss17_149-021-56defc9c004a7b76bf16314858723610-320-0.jpg', category: 'sale'},
//   {id: 13, name:'Body Camisero Escoces', price:'3380', description:'Body camisero de tela de camisería. 100% lino.', 
//   img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/56081-e566cd47148191795c16015090600138-320-0.jpg', category: 'sale'},
//   {id: 14, name:'Enterito Monstritos', price:'2300', description:'Enterito azul con estampados de Monstritos interlock. Solo talle XS. 100% algodón.',
//   img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/5015-babysu-ss18_0051-be2ad1a431291075b315918385598327-320-0.jpg', category: 'sale'},
// ]

const ItemDetailContainer = () => {
  const [data, setData] = useState ({});
  
  const {detalleId} = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'products', 'detalleId');
    getDoc(queryDoc)
      .then (res => setData({ id: res.id, ...res.data() }))

    // const getData = new Promise(resolve =>{
    //     setTimeout(()=>{
    //       resolve(ProductsDetail);
    //     },3000);
    // });
    
    // getData.then(res => setData(res.find(ProductsDetail => ProductsDetail.id === parseInt(detalleId))));
  }, [detalleId])

  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer;