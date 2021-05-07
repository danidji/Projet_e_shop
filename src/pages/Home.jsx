// import React, { useState, useEffect } from 'react';
import { productDatabase } from '../lib/database'
import ProductList from '../components/ProductList';
import { useLocation } from 'react-router-dom';




export default function Home(props) {
    const l = useLocation();

    return (
        <div className="home_page">
            < h2 >Accueil</h2 >
            <ProductList products={productDatabase} />
        </div>

    )

}