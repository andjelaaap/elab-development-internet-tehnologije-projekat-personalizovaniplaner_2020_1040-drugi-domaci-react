import React from 'react'
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar({cartNum}) {
  return (
    <div className="navBar">
      <Link to="/">Moja prodavnica </Link>
      <Link to="/cart" className='cart-item'>
        <BsCart style={{marginLeft:10}}/>
        <a className='cart-num'>{cartNum}</a>
      </Link>
      
    </div> 
  );
}

export default NavBar
