import { ShoppingCartIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import styles from './styles.module.css'

const NavbarTop = () => {
    const { cartCount, cart } = useCart();

    const [count, setCount] = useState(cartCount);

    useEffect(() => {
        setCount(cartCount)
    }, [cart])


    return (
        <>
            <div className="mt-6 mr-10">
                <div className='cart h-10 w-10 ml-auto relative'>
                    <Link to='/cart'>
                        <div className={styles.countTag}>
                            <span className={styles.text}>{count}</span>
                        </div>
                        <ShoppingCartIcon className='h-10 w-10 ml-auto' />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NavbarTop