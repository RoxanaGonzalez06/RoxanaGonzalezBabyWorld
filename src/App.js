import React from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListConteiner/ItemListContainer';
// import CardProduct from './components/CardProduct/CardProduct';


class App extends React.Component{ 
  render() {
    return (
      <>        
        <NavBar />
        <ItemListContainer 
        greeting = "Bienvenidos a su tienda Online!"
        /> 
    </>
    )
  }
}


export default App;
