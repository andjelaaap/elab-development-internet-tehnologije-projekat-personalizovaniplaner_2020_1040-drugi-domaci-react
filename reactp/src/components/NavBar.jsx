import React from 'react'
import { BsCart } from "react-icons/bs";

function NavBar({cartNum}) {
  return (
    <div className="navBar">
      <a>Moja prodavnica </a>
      <a className='cart-item'>
        <BsCart style={{marginLeft:10}}/>
      </a>
      <a className='cart-num'>{cartNum}</a>
    </div>
  );
}

export default NavBar
