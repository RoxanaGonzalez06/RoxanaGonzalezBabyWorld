import React from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListConteiner/ItemListContainer';
// import CardProduct from './components/CardProduct/CardProduct';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contact from './components/Contact/Contact';

import {BrowserRouter, Routes, Route} from "react-router-dom";

class App extends React.Component{ 
  render() {
    return (
      <> 
      <BrowserRouter>       
        <NavBar />
        <Routes>
          <Route path='/' element = {<ItemListContainer 
            greeting = "Bienvenidos a su tienda Online!"/>}/>
          <Route path='/productos/:productosId' element = {<ItemListContainer/>}/>
          <Route path='/detalle/:detalleId' element = {<ItemDetailContainer/>}/>
          <Route path='/contacto' element = {<Contact/>}/>
        </Routes>
               
      </BrowserRouter>     
    </>
    )
  }
}


export default App;
