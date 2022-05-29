import React from 'react'
import { useState ,useEffect } from 'react'
import { getProductsId } from "../../asyncmock"
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

  const [product, setProduct]= useState()

  useEffect(()=>{
    getProductsId("1").then(response =>{
      setProduct(response)
    })
  }, [])

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer