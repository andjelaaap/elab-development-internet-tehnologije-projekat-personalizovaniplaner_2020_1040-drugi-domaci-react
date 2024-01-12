import React from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar({ cartNum }) {
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
    </div>
  );
}

export default NavBar;
