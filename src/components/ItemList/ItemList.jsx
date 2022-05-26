import React from 'react'
import Itemcard from '../ItemCard/ItemCard'

const ItemList = ({products}) => {
  console.log(products)
  return (
      <div>
        {products.map(products => <Itemcard key={products.id} {...products} />)}
      </div>
  )
}

export default ItemList