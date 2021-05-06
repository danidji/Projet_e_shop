import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { findProduct } from '../lib/database';
import ButtonAddBasket from '../components/ButtonAddBasket';

export default function Product(props) {
    const p = useParams();
    // console.log(`p`, p);
    const l = useLocation();
    console.log(`Product -> l`, l)

    let myProduct = findProduct(p.id);
    console.log(`Product -> myProduct`, myProduct)


    return (
        <div className="product_page">
            <div className="header">
                < h1 >{myProduct.description}</h1 >

            </div>
            <div className="content">

                <img src={myProduct.urlImage} alt="" />
                <div className="price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(myProduct.unitPrice)}</div>
                <ButtonAddBasket />
            </div>

        </div>
    )

}