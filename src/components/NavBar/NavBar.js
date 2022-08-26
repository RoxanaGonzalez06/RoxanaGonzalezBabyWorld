import React from 'react'
import './NavBar.css'
import logo from './pngwing.com (3).png'
import {Button} from '@mui/material'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <div className='contenedorUno'>
      <img src= {logo} alt='logo'/>
        <h3>Baby WORLD</h3>
      <nav>
          <ul>
            <li>
              <Button variant='contained' size="medium" color='warning' href="#">Inicio</Button> 
            </li>
            <li>
              <Button variant='contained' size="medium" color='warning' href="#">Productos</Button>
            </li>
            <li>
              <Button variant='contained' size="medium" color='warning' href="#">Ofertas</Button>
            </li>
            <li>
              <Button variant='contained' size="medium" color='warning' href="#">Contacto</Button>  
            </li>
            <li>
              <i><CartWidget /></i>
            </li>
          </ul>
      </nav>
    </div>
  )
}

export default NavBar