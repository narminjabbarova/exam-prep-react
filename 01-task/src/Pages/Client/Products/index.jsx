import React, { useState, useEffect } from 'react';
import { endpoints } from '../../../Data/constants';
import getAllData from '../../../Data/script';
import "../Products/index.css";
import { FaRegHeart } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import { useFavorites } from '../../../Context/FavContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const filteredProducts = products
    .filter((p) =>
      p.title.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else if (sortOrder === "desc") {
        return b.price - a.price;
      }
      return 0;
    });

  const handleSearch = (e) => {
    setSearchVal(e.target.value.trim());
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const getProducts = async () => {
    try {
      const data = await getAllData(endpoints.products);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleFavorite = (product) => {
    if (favorites.some((fav) => fav.id === product.id)) {
      removeFromFavorites(product);
    } else {
      addToFavorites(product);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Shop</title>
      </Helmet>
      <div className="container">
        <div className="ip">
          <input type="text" placeholder="Search..." onChange={handleSearch} />
        </div>
        <div className="sort">
          <select onChange={handleSortChange}>
            <option value="default">Default</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="products">
        {filteredProducts.length > 0 &&
          filteredProducts.map((p) => (
            <div className="card" key={p.id}>
              <div className="icon" onClick={() => toggleFavorite(p)}>
                <FaRegHeart
                  color={favorites.some((fav) => fav.id === p.id) ? 'red' : 'gray'}
                />
              </div>
              <img src={p.image} alt={p.title} width={100} />
              <h1>{p.title.slice(0, 50)}</h1>
              <p> Price: ${p.price}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Products;
