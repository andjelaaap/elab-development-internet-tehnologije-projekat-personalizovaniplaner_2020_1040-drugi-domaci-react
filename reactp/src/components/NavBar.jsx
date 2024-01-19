import React from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";

function NavBar({ cartNum, token}) {

  function handleLogout(){
    let config = {
      method: 'post',
      url: 'api/logout',
      headers: { 
        'Authorization': 'Bearer ' + token, 
      },
    };
    
    axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      window.sessionStorage.setItem("auth_token", null);
    })
    .catch((error) => {
      console.log(error);
    });
  }


  return (
    <div className="navBar">
      <img
        src="https://www.zeppelin.rs/login/media/images/categories/0-58254900-1666006933.png"
        alt="Opis slike"
        style={{ width: "40px", height: "auto", marginRight: "20px" }}
      />
      <Link to="/">Početna strana </Link>
      <Link to="/cart" className="cart-item">
        <BsCart style={{ marginLeft: 10 }} />
        <a className="cart-num">{cartNum}</a>
      </Link>
      {token == null ? (
      <div className="linkContainer">

      <Link to="/login">PRIJAVI SE</Link>
    </div>
      ) : (
        <Link to="/" onClick={handleLogout}>ODJAVI SE</Link>
      )}
    </div>
  );
}

export default NavBar;
