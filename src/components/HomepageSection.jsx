import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlpSection } from './PlpSection';
import { fetchProducts } from '../store/slices/productSlice';
import { addItemToCart } from '../store/slices/cartSlice';

export const HomePageSection = React.memo(() => {

    const dispatch = useDispatch();
    const { apiItems, loading, error } = useSelector((state) => state.product)

    useEffect(() => {
        if (apiItems.length === 0) {
            dispatch(fetchProducts());
        }
        console.log(apiItems);
    }, []);

    function handleAddToCartClick(ele) {
        dispatch(addItemToCart(ele));
    }

    return (
        <div>
            <div className="products-section">
                <h1 className="text-3xl font-bold text-center">Products</h1>
                <div className="mt-5">
                    <PlpSection apiItems={apiItems} handleAddCart={handleAddToCartClick} />
                </div>
            </div>
        </div>
    )
})