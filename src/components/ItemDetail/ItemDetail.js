import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({data}) => {
    console.log(data)
  return (
        <div className='contDetailP'>
            <h3>Detalle</h3>
            <img className='imgP' src={data.img} alt=""/>
            <div className='detailP'>
                <h2>{data.name}</h2>
                    <h3>{data.price}</h3>
                    <p>{data.description}</p>
            </div>
        </div>
  )
}

export default ItemDetail