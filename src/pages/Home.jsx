// import React, { useState, useEffect } from 'react';
import { productDatabase } from '../lib/database'
import ProductList from '../components/ProductList';
import { useLocation } from 'react-router-dom';




export default function Home(props) {
    const l = useLocation();
    console.log(`Home -> l`, l)


    return (
        <div className="home_page">
            < h1 >Accueil</h1 >
            <ProductList products={productDatabase} />
        </div>

    )

}