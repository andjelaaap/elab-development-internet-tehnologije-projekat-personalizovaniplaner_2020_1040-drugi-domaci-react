import React from 'react'
import OneProduct from './OneProduct'


const Products = ({products, onAdd, remFromCart}) => {
    
  return (
    <div className= 'all-products'>
      <div style={{display: 'flex', flexDirection: 'row'}}>
      {products.slice(0,3).map((prod) => (<OneProduct product= {prod} key = {prod.id} onAdd={onAdd} remFromCart={remFromCart} inCart={1}/>
      ))}
      </div>

      <div style={{display: 'flex', flexDirection: 'row'}}>
      {products.slice(3,5).map((prod) => (<OneProduct product= {prod} key = {prod.id} onAdd={onAdd} remFromCart={remFromCart} inCart={1}/>
      ))}
      </div>
    </div>
  )
}

export default Products
