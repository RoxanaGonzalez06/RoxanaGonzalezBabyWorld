import React from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListConteiner/ItemListContainer';
import CardProduct from './components/CardProduct/CardProduct';


class App extends React.Component{ 
  render() {
    return (
      <>        
        <NavBar />
        <ItemListContainer 
        greeting = "Bienvenidos a su tienda Online!"
        /> 
      <div className='ProductCard'>
          <CardProduct
            name='Body Polera'
            price='$1.300'
            description='Body cuello polera de manga larga, varios colores. 100% algodón.'
            img='https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/babysuinvierno2021_223-0f5a0e29a7ad8aa77f16293305459772-320-0.jpg'
          />
          <CardProduct
            name='Body Abrazo'
            price='$1.700'
            description='Body manga larga de interlock con bordado y aplique, 100% algodón.'
            img='https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/babysuonline2020_04111-ef54bca1e2d69de33f16275898840315-320-0.jpg'
          />
          <CardProduct
            name='Body Bear Hug'
            price='$1.600'
            description='Body de invierno estampado de manga larga, 100% algodón.'
            img='https://d3ugyf2ht6aenh.cloudfront.net/stores/825/266/products/6132-babysusw20_0471-c0309806acb0f68c7516182679954745-320-0.jpg'
          />
      </div>  
    </>
    )
  }
}


export default App;
