import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useProduct } from "../../Context/ProductContext";
import styles from './styles.module.css';
import { HeartIcon, ShoppingCartIcon, StarIcon } from "@heroicons/react/solid";
import { useCart } from "../../Context/CartContext";
import { useFavorites } from "../../Context/FavoriteContext";
import Loader from "../../Components/Loader";

const ProductDetail = () => {

    const { product_id } = useParams();
    const { product, setProductId, loading } = useProduct();
    const { cart, addToCart, removeFromCart } = useCart();
    const { favorites, addToFav, removeFromFav } = useFavorites();
    const [inCart, setInCart] = useState(false);
    const [inFav, setInFav] = useState(false);

    useEffect(() => {
        favorites.map((item) => {
            if (product.title === item.title) {
                setInFav(true);
                // console.log('setting true')
            }
        });
    }, [favorites])

    const favoritesHandler = () => {
        if (inFav) {
            removeFromFav(product);
            setInFav(false);
        } else {
            addToFav(product);
            setInFav(true);
        }
    }

    useEffect(() => {
        cart.map((item) => {
            if (item.title === product.title) {
                setInCart(true);
                // console.log(cart);
            } else {
                setInCart(false);
            }
        })

    }, [product])

    const cartItemHandler = () => {
        if (inCart) {
            removeFromCart(product);
            setInCart(false);
        } else {
            addToCart(product);
            setInCart(true);
        }
    }

    // console.log("product", product);
    useEffect(() => {
        setProductId(product_id);
    }, [product_id]);


    return (
        <>
            {(!loading && product?.id) ? (
                <div className="flex flex-wrap max-7-xl mx-auto my-4" >
                    <div className="w-full p-4 sm:w-2/2 md:w-2/2 xl:w-5/5 flex flex-wrap">
                        <img src={product.image} className={styles.image}></img>

                        <div className="w-full my-auto lg:py-6 lg:pl-10 lg:w-2/3">

                            <h2 className="text-sm mt-4 mb-2 hover:text-red-500 tracking-widest">Brand</h2>
                            <h1 className="text-gray-900 text-2xl font-bold mt-1 mb-5 hover:text-green-500">{product.title}</h1>
                            <div className={styles.rating}>
                                {[...Array(Math.round(product.rating.rate))].map((e, i) =>

                                    <StarIcon
                                        key={`star-${i}`}
                                        className={styles.starIcon}
                                        aria-hidden='true' />
                                )}
                                {[...Array(5 - Math.round(product.rating.rate))].map((e, i) =>

                                    <StarIcon
                                        key={`star-${i}`}
                                        className={styles.emptyStarIcon}
                                        aria-hidden='true' />
                                )}
                                <p className='text-xs ml-1 font-light mt-0.5'>{product.rating.count}</p>
                            </div>
                            <p className="border-b-2 mb-2 border-zinc-900/10 pb-6 capitalize">{product.description}</p>

                            <div className="flex">

                                <div className='my-auto'>
                                    <span >${product.price}</span>
                                </div>

                                <div className="block ml-auto my-auto mt-0">
                                    <div className={styles.addToCart}>
                                        <button className={(!inCart) ? styles.addToCartButton : styles.removeFromCartButton} onClick={cartItemHandler}>
                                            <ShoppingCartIcon className={styles.shoppingCartIcon}></ShoppingCartIcon>
                                            <span className={styles.buttonText}>{(!inCart) ? ('Add to cart!') : ('Remove from cart')}</span>
                                        </button>
                                    </div></div>

                                <div className="block my-auto">
                                    <button className={!(inFav) ? styles.favButton : styles.favButtonRed} onClick={favoritesHandler}>
                                        <HeartIcon />
                                    </button></div>

                            </div>



                        </div>




                    </div>
                </div>) : (<>
                    <div className="container w-full h-72 flex place-items-center place-content-center">
                        <Loader />
                    </div>
                </>
            )}

        </>)

}

export default ProductDetail;