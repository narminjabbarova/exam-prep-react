import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css"

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className= "logo">
            <img
              className="image"
              src="https://preview.colorlib.com/theme/wines/images/logo.png"
            />
            <nav>
              <ul>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/shop"}>Shop</NavLink>
                </li>
                <li>
                  <NavLink to={"/wishlist"}>Wishlist</NavLink>
                </li>
                <li>
                  <NavLink to={"/add"}>Add</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
