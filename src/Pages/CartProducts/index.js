import Card from '../../Components/Card';
import React from 'react'
import { useProduct } from '../../Context/ProductContext'
import styles from './styles.module.css';
import { useCart } from '../../Context/CartContext';
import Loader from '../../Components/Loader';

const CartProducts = () => {

    const { loading } = useProduct();
    const { cart } = useCart();
    // console.log(productList);

    return (
        <div className={styles.cardGroup}>
            {
                !loading ? (
                    cart?.map((item, i) => {
                        return (
                            <Card item={item} key={i} />
                        )
                    })
                ) : (
                    <>
                        <div className="container">
                            <Loader />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default CartProducts