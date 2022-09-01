import { createContext, useContext, useEffect, useState } from "react";


const FavoriteContext = createContext();

export const FavoriteContextProvider = ({ children }) => {

    const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    const [favorites, setFavorite] = useState(favoritesFromLocalStorage);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])


    const addToFav = (item) => {
        setFavorite([...favorites, { ...item }]);
    }

    const removeFromFav = (itemToRemove) => {
        // console.log("removing from cart");
        setFavorite(
            favorites.filter((item) => item.title !== itemToRemove.title)
        );
    }

    useEffect(() => {
        console.log(favorites);
    }, [favorites])


    const values = {
        favorites,
        addToFav,
        removeFromFav
    }

    return (<FavoriteContext.Provider value={values}>{children}</FavoriteContext.Provider>)
}



export const useFavorites = () => useContext(FavoriteContext);