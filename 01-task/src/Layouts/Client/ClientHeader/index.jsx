import React from 'react'
import { NavLink } from 'react-router-dom'
import "../ClientHeader/index.css"

const ClientHeader = () => {
  return (
    <header>
    <nav>
        <h1>React App(Client Side)</h1>
        
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
                <li><NavLink to={"/products"}>Products</NavLink></li>
                <li><NavLink to={"/favorites"}>Favorites <sup>0</sup></NavLink></li>
            </ul>
        
        
    </nav>
</header>
  )
}

export default ClientHeader