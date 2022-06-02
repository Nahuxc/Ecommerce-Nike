import React from 'react'
import "./ItemCardStyle.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemCard = ({id, name, precio, img, stock}) => {
  return (
        <div className="box-product">
            <img className="img-prod" src={img}  alt="zapatilla-nike" />
            <h1 className="titule-prod">{name}</h1>
            <p className="price-prod"> {precio}</p>
            <ItemCount initial="0" stock={stock}/>
            <div className='box-btndetalle'>
              <Link className='btn-detalle' to={`/detalle/${id}`}>Ver Detalle</Link>
            </div>
            <div className='box-btnbuy'>
              <button className='btn-buy'>Agregar Al Carrito</button>
            </div>
        </div>
  )
}

export default ItemCard;