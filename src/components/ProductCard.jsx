import React from 'react';
import { Link } from 'react-router-dom';
import ButtonAddBasket from './ButtonAddBasket';

export default function ProductCard(props) {
    // console.log(`ProductCard -> props`, props)
    return (
        <div className="product_card">
            <Link className="link_product" to={'/produit/' + props.id}>
                <div className="product_image">
                    <img src={props.urlImage} alt="" />
                </div>
                <h3>{props.description}</h3>
                <div className="price">
                    <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(props.price)}</p>
                    <ButtonAddBasket className="button_add" id={props.id} />
                </div>
            </Link>
        </div >
    )
}

