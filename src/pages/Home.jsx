// import React, { useState, useEffect } from 'react';
import { productDatabase } from '../lib/database'
import ProductList from '../components/ProductList';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function Home(props) {
    const l = useLocation();
    const context = useContext(AppContext)

    // A l'affichage de la page, si la route contient 'success' alors je supprime mon panier
    useEffect(() => {
        if (l.pathname.includes('success')) {
            context.clearAllBasket();

        }

    }, [])
    return (
        <div className="home_page">
            < h2 >Accueil</h2 >
            <ProductList products={productDatabase} />
            <ToastContainer />
        </div>

    )

}