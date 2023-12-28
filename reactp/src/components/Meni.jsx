import React from 'react';
import {BsCartFill} from "react-icons/bs";
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function Meni({cartNum, isHome, isShop}) {
  return (
    <div className='background-image'>  
      <div className = {isHome === 1 ? "menu-bar" : "menu-else"}>
    <div
      className={
      isHome===1 ? "menu-bar-items-div" : "menu-bar-items-div-else"
      }
    >
    <Link
     to = "/products"
     className="menu-bar-items"
     // style = {isShop===1 ? {fontStyle:"italic"} : {textDecorationLine:"underline"}}
     >
     Planeri
    </Link>  
   </div>
   {isShop === 1 || isHome === 0 ? (
     <Link to = "/cart" className='cart-items'>
       {/* <BsCartFill className='icon-cart' /> */}
       {/* <p className='cart-num'>{cartNum}</p> */}
       
     </Link>
   ) : (
     <div className="menu-bar-text">
       <p>Za sladak svaki dan ili neki poseban</p>
       <div className='menu-bar-info'>
         <p>Kontakt: 064/267 72 76</p>
         <p>Radno vreme: Pon-Ned 07-22h</p>
         <p>Adresa: Lava Tolstoja 13a, Pančevo</p>
       </div>
     </div>
   )}

 </div></div>

    
  );
}

export default Meni
