import React from 'react'
/* import CardShoes from '../cardShoes/CardShoes' */
import Itemcard from '../ItemCard/ItemCard'
import "./ItemList.css"


const ItemList = ({products}) => {
  console.log(products)
  return (
      <div className="box-itemlist">
        {products.map(products => <Itemcard key={products.id} {...products}/>)}
        {/* {products.map(products => <CardShoes key={products.id} {...products}/>)} */}
      </div>
  )
}

export default ItemList