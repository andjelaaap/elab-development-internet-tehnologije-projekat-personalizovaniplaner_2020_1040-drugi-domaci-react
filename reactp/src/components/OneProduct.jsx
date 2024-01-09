import React from 'react'
import { BsCartPlus } from "react-icons/bs";
import { BsCartDash } from "react-icons/bs";

function OneProduct({product, onAdd, remFromCart,inCart}) {
     
  return (
    <div className={inCart === 1 ? "card" : "card-cart"} style={{margin:10, borderStyle:"double", backgroundColor: 'pink', width: '30%', alignItems: 'center', display: 'flex', flexDirection: 'column', borderRadius: '20px'}}>
      <img src={product.url} alt="image" className="img-product" />
      <div className='card-body'>
        <h3 className='card-title'>
             {product.title}
        </h3>
        <p className='card-text' >
            {product.description}
        </p>
        <p className='card-price' >
            {product.price}
        </p>
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>      
        {inCart === 1 ?( <><button className='btn' onClick={()=>onAdd(product.title, product.id)}>
        <BsCartPlus/>
        </button>
        <button className='btn' onClick={()=>remFromCart(product.title, product.id)}>
          <BsCartDash/>
           </button>
            </> 
            ) : (
              <h4>Amount: {product.amount}</h4>
            ) }</div>
    </div>
  );
}

export default OneProduct
