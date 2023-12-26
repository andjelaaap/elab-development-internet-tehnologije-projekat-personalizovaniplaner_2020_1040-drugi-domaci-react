import React from 'react'
import { BsCart } from "react-icons/bs";

function NavBar() {
  return (
    <div className="navBar">
      <a>Moja prodavnica </a>
     <a className='cart-item'>
        <BsCart style={{marginLeft:10}}/>
      </a>
      <a className='cart-num'>0</a>
    </div>
  );
}

export default NavBar
