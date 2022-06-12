import React from 'react'
import { useState, useEffect, } from 'react'
import { getProductsId } from "../../asyncmock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(true)



  const { productId } = useParams()


  useEffect(() => {
    getProductsId(productId).then(response => {
      setProduct(response)
    }).finally(() =>{
      setLoading(false, 2500)
    })
  }, [productId])


  if(loading){
    return <div className='loading'>
      <img src="https://www.wsj.com/coupons/static/shop/32174/logo/Nike-coupons.png" alt="logo-nike" />
      <h1 >Cargando...</h1>
    </div>
  }

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...product} />
    </div>
  )

}

export default ItemDetailContainer