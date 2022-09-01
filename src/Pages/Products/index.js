import Card from '../../Components/Card';
import React from 'react'
import { useProduct } from '../../Context/ProductContext'
import styles from './styles.module.css';
import Loader from '../../Components/Loader';

const Products = () => {

    const { productList, loading } = useProduct();

    // console.log(productList);

    return (
        <div className={styles.cardGroup}>
            {
                !loading ? (
                    productList?.map((item, i) => {
                        return (
                            <Card item={item} key={i} />
                        )
                    })
                ) : (<>
                    <div className="container w-full h-72 flex place-items-center place-content-center">
                        <Loader />
                    </div>
                </>
                )
            }
        </div>
    )
}

export default Products