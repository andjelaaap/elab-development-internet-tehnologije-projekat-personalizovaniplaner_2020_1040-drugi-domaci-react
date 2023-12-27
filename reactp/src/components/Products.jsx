import React from 'react'
import OneProduct from './OneProduct'


const Products = ({products}) => {
  return (
    <div className= 'all-products'>
          {products.map((prod) => (<OneProduct product= {prod} key = {prod.id} />
      ))}
      
    </div>
  )
}

export default Products
