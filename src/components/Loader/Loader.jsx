import React from 'react'
import "./Loader.css"

const Loader = () => {
  return (
    <div className='loading'>
      <img className="logo-loading" src="https://www.wsj.com/coupons/static/shop/32174/logo/Nike-coupons.png" alt="logo-nike"></img>
      <div className='loader'>
        <span className='loader-sp'></span>
        <span className='loader-sp'></span>
        <span className='loader-sp'></span>
        <span className='loader-sp'></span>
      </div>
    </div>
  )
}

export default Loader