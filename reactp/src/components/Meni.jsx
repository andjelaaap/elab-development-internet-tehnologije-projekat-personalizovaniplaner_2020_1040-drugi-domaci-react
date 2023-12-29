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
     >
     Planeri
    </Link>  
   </div>
   {isShop === 1 || isHome === 0 ? (
     <Link to = "/cart" className='cart-items'>
       
     </Link>
   ) : (
     <div className="menu-bar-text">
       <img
        src="https://www.zeppelin.rs/login/media/images/categories/0-58254900-1666006933.png"
        alt="Opis slike"
        style={{ width: '200px', height: 'auto' }}
      />
       <p>Organizirajte svoj dan, nedelju i godinu koristeći naše unikatne planere. Upotpunite dozivljaj personalizacijom bilo kog planera koji odaberete.</p>
       <div className='menu-bar-info'>
         <p>Kontakt: 064/267 72 76</p>
         <p>Radno vreme: Pon-Ned 07-22h</p>
         <p>Adresa: Bulevar Kralja Aleksandra 10, Beograd</p>
       </div>
     </div>
   )}

 </div></div>

    
  );
}

export default Meni
