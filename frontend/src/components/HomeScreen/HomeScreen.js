import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import axios from 'axios';

import { listProducts } from '../../actions/productActions';

import './HomeScreen.css';

export default function HomeScreen(props) {
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts());
    }, [])

    return loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
            <ul className="products">
                {products.map(product =>
                    <li>
                        <div className="product">
                            <Link to={`/product/${product._id}`}>
                                <img className="product-image" src={product.imagePath} alt="" />
                            </Link>
                            <div className="product-name">
                                <Link to={`/product/${product._id}`}>{product.name}</Link>
                            </div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">${product.price}</div>
                            <div className="product-rating">{product.rating} Stars ({product.reviewCount} reviews)</div>
                        </div>
                    </li>
                )}
            </ul>
}
