import React from 'react'
import { BsCartPlus } from "react-icons/bs";
import { BsCartDash } from "react-icons/bs";

function OneProduct() {
  return (
    <div className='card' style={{margin:20, borderStyle:"double"}}>
      <img src="https:/picsum.photos/200" alt="Neka slika" />
      <div className='card-body'>
        <h3 className='card-title'>
            Product name
        </h3>
        <p className='card-text'>
            This is description of product.
        </p>
      </div>
      <button className='btn'><BsCartPlus/></button>
      <button className='btn'><BsCartDash/></button>
    </div>
  )
}

export default OneProduct
