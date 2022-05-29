import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({id, name, precio, img, stock, descripcion}) => {
  return (
    <div className='box-ItemDetail'>
        <div className='box-img'>
          <img className='img-detail' src= {img} alt="Zapatillas-nike" />
        </div>
        <div className='box-descripcion'>
          <h1 className='titulo-detail'>{name}</h1>
          <p className='descripcion-detail'> {descripcion} </p>
          <p className='precio-detail'> {precio} </p>
          <div className='box-btnbuy'>
              <button className='btn-buy'>Agregar Al Carrito</button>
          </div>
        </div>
    </div>
  )
}

export default ItemDetail