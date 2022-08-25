import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (

    <div className='cuerpo'>

    <h1>Baby WORLD</h1>
    <h2>{greeting}</h2>

    </div>
  )
}

export default ItemListContainer