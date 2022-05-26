import React from 'react'
import "./ItemCardStyle.css"
import ItemCount from '../ItemCount/ItemCount'

const ItemCard = ({id, name, precio, img}) => {
  return (
        <div className="box-product">
            <h1 className="titule-prod">{name}</h1>
            <img className="img-prod" src={img}  alt="zapatilla-nike" />
            <p className="price-prod"> {precio}</p>
            <ItemCount initial="1" stock="10"/>
        </div>
  )
}

export default ItemCard;