import React from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListConteiner/ItemListContainer';
// import CardProduct from './components/CardProduct/CardProduct';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

class App extends React.Component{ 
  render() {
    return (
      <>        
        <NavBar />
        <ItemDetailContainer/>
        <ItemListContainer 
        greeting = "Bienvenidos a su tienda Online!"
        />     
    </>
    )
  }
}


export default App;
