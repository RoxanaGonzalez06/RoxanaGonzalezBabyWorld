import './App.css';
import React from 'react';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListConteiner/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contact from './components/Contact/Contact';
import BuyerContact from './components/BuyerContact/BuyerContact';
import Cart from './components/Cart/Cart';

import CartProvider from './context/CartContext';

class App extends React.Component{ 
  render() {
    return (
      <> 
      <BrowserRouter>       
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element = {<ItemListContainer 
              greeting = "Bienvenidos a su tienda Online!"/>}/>
            <Route path='/productos/:productosId' element = {<ItemListContainer/>}/>
            <Route path='/detalle/:detalleId' element = {<ItemDetailContainer/>}/>
            <Route path='/contacto' element = {<Contact/>}/>
            <Route path='/carrito-user' element = {<BuyerContact/>}/>
            <Route path='/carrito' element = {<Cart/>}/>
          </Routes>  
        </CartProvider>        
      </BrowserRouter>     
    </>
    )
  }
}


export default App;
