import React from 'react';
import { Link } from 'react-router-dom';
import ButtonAddBasket from './ButtonAddBasket';

export default function ProductCard(props) {
    // console.log(`ProductCard -> props`, props)
    return (
        <div className="product_card">
            <Link exact to={'/produit/' + props.id}>
                <h3>{props.description}</h3>
                <img src={props.urlImage} alt="" />
                <div className="price">
                    <p>{props.price} €</p>
                    <ButtonAddBasket />
                </div>
            </Link>
        </div >
    )
}