import { createContext, useState, useContext } from 'react';

export const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    if (!favorites.some((fav) => fav.id === product.id)) {
      setFavorites((prev) => [...prev, product]);
    }
  };

  const removeFromFavorites = (product) => {
    setFavorites(favorites.filter((fav) => fav.id !== product.id));
  };


  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;