import Card from '../../Components/Card';
import React from 'react'
import { useProduct } from '../../Context/ProductContext'
import styles from './styles.module.css';
import { useFavorites } from '../../Context/FavoriteContext';

const FavoriteProducts = () => {

    const { loading } = useProduct();
    const { favorites } = useFavorites();
    // console.log(productList);

    return (
        <div className={styles.cardGroup}>
            {
                !loading ? (
                    favorites?.map((item, i) => {
                        return (
                            <Card item={item} key={i} />
                        )
                    })
                ) : (<h1>loading......</h1>)
            }
        </div>
    )
}

export default FavoriteProducts