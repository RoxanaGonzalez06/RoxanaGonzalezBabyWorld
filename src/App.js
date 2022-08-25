import React from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';

import ItemListContainer from './components/ItemListConteiner/ItemListContainer';

function App() {

  return (

    <>
      
      <NavBar />
      <ItemListContainer 
      greeting = "Bienvenidos a su tienda Online!"
      />

      
    </>
  )
}

export default App;
