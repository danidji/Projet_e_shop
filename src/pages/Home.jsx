// import React, { useState, useEffect } from 'react';
import { productDatabase } from '../lib/database'
import ProductList from '../components/ProductList';




export default function Home(props) {

    return (
        <div className="home_page">
            < h2 >Accueil</h2 >
            <ProductList products={productDatabase} />
        </div>

    )

}