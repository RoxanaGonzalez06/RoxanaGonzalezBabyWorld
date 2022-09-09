import React from 'react'
import './NavBar.css'
import logo from './pngwing.com (3).png'
import CartWidget from '../CartWidget/CartWidget'

import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='contenedorUno'>
      <img src= {logo} alt='logo'/>
        <h3>Baby WORLD</h3>
      <nav>
          <ul>
            <li>
              <NavLink to ='/'>Inicio</NavLink> 
            </li>
            <li>
              <NavLink to ='/productos/nuevo'>Productos</NavLink>
            </li>
            <li>
              <NavLink to ='/productos/sale'>Ofertas</NavLink>
            </li>
            <li>
              <NavLink to ='/contacto'>Contacto</NavLink>  
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