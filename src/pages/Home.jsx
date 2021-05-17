// import React, { useState, useEffect } from 'react';
import { productDatabase } from '../lib/database'
import ProductList from '../components/ProductList';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { useContext } from 'react';


export default function Home(props) {
    const l = useLocation();
    const context = useContext(AppContext)
    if (l.pathname.includes('success')) {
        context.clearAllBasket();

    }
    return (
        <div className="home_page">
            < h2 >Accueil</h2 >
            <ProductList products={productDatabase} />
        </div>

    )

}