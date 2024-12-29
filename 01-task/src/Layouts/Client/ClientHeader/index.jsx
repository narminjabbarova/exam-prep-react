import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFavorites } from '../../../Context/FavContext';
import "../ClientHeader/index.css";

const ClientHeader = () => {
  const { favorites } = useFavorites();

  return (
    <header>
      <nav>
        <h1>Client</h1>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/contact"}>Contact</NavLink></li>
          <li><NavLink to={"/products"}>Products</NavLink></li>
          <li>
            <NavLink to={"/favorites"}>
              Favorites <sup>{favorites.length}</sup>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default ClientHeader;
