import React from 'react'
import Product from './Product'
import './products.css'

const Products = () => {
  return (
    <div className='products'>
      <h1>Products</h1>
        <div className='prod'>
          <Product/>
          <Product/>
        </div>
    </div>
  )
}

export default Products