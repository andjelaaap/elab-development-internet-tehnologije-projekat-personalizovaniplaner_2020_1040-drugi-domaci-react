import React from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdAccountBox } from "react-icons/md";

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
      <div className="linkContainer" style={{marginLeft:'auto', marginRight:'20px'}}>
      {token == null ? (
        <div>
      <MdAccountBox style={{fontSize:'30px', marginRight:'5px'}}></MdAccountBox>
      <Link to="/login">PRIJAVI SE</Link>
      </div>
      ) : (
        <div>
          <MdAccountBox style={{fontSize:'30px', marginRight:'5px'}}></MdAccountBox>
          <label style={{fontWeight: 'bold', marginRight:'15px'}}>{window.sessionStorage.getItem("name_login")}</label>
        <Link to="/" onClick={handleLogout}>ODJAVI SE</Link>
        </div>
      )}
      </div>
    </div>
  );
}

export default NavBar;
