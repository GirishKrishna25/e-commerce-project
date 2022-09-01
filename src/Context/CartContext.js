import { createContext, useContext, useEffect, useState } from "react";


const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    // items state
    // store items in localstorage - localStorage.setItem('key',value); localStorage.getItem('key');
    // make functions addToCart and removeFromCart

    const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart, setCart] = useState(cartFromLocalStorage);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])


    const addToCart = (item) => {
        // console.log({ ...item, inCart: "true" }, "adding to cart");
        setCart([...cart, { ...item }]);
    }

    const removeFromCart = (itemToRemove) => {
        // console.log("removing from cart");
        setCart(
            cart.filter((item) => item.title !== itemToRemove.title)
        );
    }

    const cartCount = () => {
        return cart.length;
    }

    useEffect(() => {
        console.log(cart)
    }, [cart]);

    const values = {
        cart,
        addToCart,
        removeFromCart,
        cartCount
    }

    return (<CartContext.Provider value={values}>{children}</CartContext.Provider>)
}



export const useCart = () => useContext(CartContext);