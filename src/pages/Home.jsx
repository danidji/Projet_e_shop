import React, { useState, useEffect } from 'react';
import { productDatabase } from '../lib/database'
import ProductList from '../components/ProductList';
// import { useHistory, useLocation, useParams } from 'react-router-dom';



export default function Home(props) {


    return (
        <div className="home_page">
            < h1 > Bienvenue sur mon site</h1 >
            <ProductList products={productDatabase} />
        </div>

    )

}