import React from 'react';
import { useFavorites } from '../../../Context/FavContext/index';
import { Helmet } from 'react-helmet-async';
import "../Products/index.css"; 

const Favorites = () => {
  const { favorites, removeFromFavorites, clearFavorites } = useFavorites();

  const handleRemoveFromFavorites = (product) => {
    removeFromFavorites(product);
  };

  const handleClearFavorites = () => {
    clearFavorites();
  };

  return (
    <>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <div className="container">
        <h2>Your Favorites</h2>
        {favorites.length > 0 ? (
          <div className="products">
            {favorites.map((p) => (
              <div className="card" key={p.id}>
                <div className="icon" onClick={() => handleRemoveFromFavorites(p)}>
                  <span style={{ color: 'red', cursor: 'pointer' }}>♥</span>
                </div>
                <img src={p.image} alt={p.title} width={100} />
                <h1>{p.title.slice(0, 50)}</h1>
                <p> Price: ${p.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No products in your favorites yet.</p>
        )}

        {favorites.length > 0 && (
          <button onClick={handleClearFavorites} className="clear-favorites-button">
            Clear All
          </button>
        )}
      </div>
    </>
  );
};

export default Favorites;
