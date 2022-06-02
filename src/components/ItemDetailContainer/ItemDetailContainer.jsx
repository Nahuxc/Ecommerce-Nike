import React from 'react'
import { useState, useEffect } from 'react'
import { getProductsId } from "../../asyncmock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

  const [product, setProduct] = useState()


  const { productId } = useParams()


  useEffect(() => {
    getProductsId(productId).then(response => {
      setProduct(response)
    })
  }, [productId])

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...product} />
    </div>
  )

}

export default ItemDetailContainer