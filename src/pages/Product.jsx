import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { findProduct } from '../lib/database';
import ButtonAddBasket from '../components/ButtonAddBasket';
import SetQuantity from '../components/SetQuantity';
import { AppContext } from '../AppContext'
import { useContext } from 'react';

export default function Product(props) {
    const p = useParams();
    const l = useLocation();

    let myProduct = findProduct(p.id);
    // const context = useContext(AppContext);

    // let myProductBasket = context.basket.find(element => element.productCode = p.id);

    return (
        <div className="product_page">

            <div className="content">

                <img src={myProduct.urlImage} alt="" />
                < h2 >{myProduct.description}</h2 >


                {/* <SetQuantity id={myProduct.productCode} qty={state} /> */}
                <div className="price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(myProduct.unitPrice)}</div>
                <ButtonAddBasket />
            </div>

        </div>
    )

}