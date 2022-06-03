import React from 'react'
import "./ItemCard.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemCard = ({id, name, precio, img, stock}) => {
    return (
      <div className='section'>
        <div className='contenedor-card'>
            <div className='card'>
                <div className='imgbx'>
                    <img src={img} alt="" />
                    <h2 className="titule-prod">{name}</h2>
                </div>
                <div className='contenido'>
                  <p className="price-prod"> {precio}</p>
                      <div className='tallas'>
                          <h3>Talla :</h3>
                              <span>38</span>
                              <span>39</span>
                              <span>40</span>
                              <span>41</span>
                      </div>
                      <div className='zapatillas-colores'>
                          <h3>Color :</h3>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                      </div>
                      <ItemCount initial="0" stock={stock}/>
                      <div className='box-btndetalle'>
                          <Link className='btn-detalle' to={`/detalle/${id}`}>Ver Detalle</Link>
                      </div>
                      <div className='box-btnbuy'>
                          <button className='btn-buy'>Agregar Al Carrito</button>
                      </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default ItemCard;