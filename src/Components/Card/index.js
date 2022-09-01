import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { HeartIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import { useFavorites } from '../../Context/FavoriteContext';

const Card = ({ item }) => {
    // console.log("sdsdsd", item);
    const { favorites, addToFav, removeFromFav } = useFavorites();
    const { addToCart, removeFromCart, cart } = useCart();
    const [inFav, setInFav] = useState(false);
    const [inCart, setInCart] = useState(false);

    useEffect(() => {
        favorites.map((product) => {
            if (product.title === item.title) {
                setInFav(true);
                // console.log('setting true')
            }
        });
    }, [favorites])

    const favoritesHandler = () => {
        if (inFav) {
            removeFromFav(item);
            setInFav(false);
        } else {
            addToFav(item);
            setInFav(true);
        }
    }

    useEffect(() => {
        cart.map((product) => {
            if (product.title === item.title) {
                setInCart(true);
            }
        })

    }, [cart])

    const cartItemHandler = () => {
        if (inCart) {
            removeFromCart(item);
            setInCart(false);
        } else {
            addToCart(item);
            setInCart(true);
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardLink}>
                <button className={!(inFav) ? styles.favButton : styles.favButtonRed} onClick={favoritesHandler}>
                    <HeartIcon />
                </button>

                <div className={styles.cardHeader}>
                    <Link to={`product/${item.id}` }>
                        <img className={styles.cardImg} src={item.image} />
                    </Link>

                </div>

                <div className={styles.cardBody}>
                    <>
                        <p className={styles.cardTitle}>
                            <span className={styles.brand} >
                                Brand,
                            </span>
                            {item.title}
                        </p>
                    </>
                    <div className={styles.rating}>
                        {[...Array(Math.round(item.rating.rate))].map((e, i) =>

                            <StarIcon
                                key={`star-${i}`}
                                className={styles.starIcon}
                                aria-hidden='true' />
                        )}
                        {[...Array(5 - Math.round(item.rating.rate))].map((e, i) =>

                            <StarIcon
                                key={`star-${i}`}
                                className={styles.emptyStarIcon}
                                aria-hidden='true' />
                        )}
                        <p className='text-xs ml-1 font-light mt-0.5'>{item.rating.count}</p>
                    </div>

                    <div>
                        <div className='my-auto'>
                            <span >${item.price}</span>
                        </div>
                    </div>

                    <div className={styles.addToCart}>
                        <button className={(!inCart) ? styles.addToCartButton : styles.removeFromCartButton} onClick={cartItemHandler}>
                            <ShoppingCartIcon className={styles.shoppingCartIcon}></ShoppingCartIcon>
                            <span className={styles.buttonText}>{(!inCart) ? ('Add to cart!') : ('Remove from cart')}</span>
                        </button>
                    </div>


                </div>


            </div>


        </div >
    )
}

export default Card