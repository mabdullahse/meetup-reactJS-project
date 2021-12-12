import React from "react";
import { useState } from "react";

const FavoritesContext = React.createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (meetupItem) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});
export default FavoritesContext;

export function FavoritesContextProvider(props) {
  const [userFavorite, setUserFavorite] = useState([]);

  const context = {
    favorites: userFavorite,
    totalFavorites: userFavorite.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: isItemFavoriteHandler,
  };

  function addFavoriteHandler(newfavoriteItem) {
    setUserFavorite((prevFavoriteList) => {
      return prevFavoriteList.concat(newfavoriteItem);
    });
  }

  function removeFavoriteHandler(itemId) {
    setUserFavorite((prevFavoriteList) => {
      return prevFavoriteList.filter((item) => item.id !== itemId);
    });
  }

  function isItemFavoriteHandler(meetupId) {
    return userFavorite.some((item) => item.id === meetupId);
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
