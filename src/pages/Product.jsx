import React from 'react';
import { useParams } from 'react-router-dom';
import { findProduct } from '../lib/database';
import ButtonAddBasket from '../components/ButtonAddBasket';


export default function Product(props) {
    const p = useParams();

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