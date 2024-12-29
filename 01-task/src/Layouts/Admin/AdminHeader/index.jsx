import React from 'react'
import { NavLink } from 'react-router-dom'
import "../AdminHeader/index.css"

const AdminHeader = () => {
  return (
    <header>
      <nav>
        <h1>Admin</h1>

        <ul>
          <li><NavLink to={"/admin"} end>DashBoard</NavLink></li>
          <li><NavLink to={"/admin/products"}>Products</NavLink></li>
          <li><NavLink to={"/admin/addproduct"}>Add Product</NavLink></li>
        </ul>


      </nav>
    </header>
  )
}

export default AdminHeader