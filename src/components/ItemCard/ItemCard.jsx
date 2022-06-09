import React from 'react'
import "./ItemCard.css"
import { Link } from 'react-router-dom'

const ItemCard = ({id, name, precio, img, talla}) => {
    return (
        <div className='contenedor-card'>
            <div className='card'>
                <div className='imgbx'>
                    <img src={img} alt="" />
                    <h2 className="titule-prod">{name}</h2>
                </div>
                <div className='contenido'>
                  <p className="price-prod"> ARS$ {precio}</p>
                      <div className='tallas'>
                          <h3>Talla :</h3>
                              <span>{talla[0]}</span>
                              <span>{talla[1]}</span>
                              <span>{talla[2]}</span>
                              <span>{talla[3]}</span>
                      </div>
                      <div className='box-btndetalle'>
                          <Link className='btn-detalle' to={`/detalle/${id}`}>Ver Detalle</Link>
                      </div>
                </div>
            </div>
        </div>
  )
}

export default ItemCard;

