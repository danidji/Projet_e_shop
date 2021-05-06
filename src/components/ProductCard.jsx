import React from 'react';
import { Link } from 'react-router-dom';
import ButtonAddBasket from './ButtonAddBasket';

export default function ProductCard(props) {
    // console.log(`ProductCard -> props`, props)
    return (
        <div className="product_card">
            <Link exact to={'/produit/' + props.id}>
                <img src={props.urlImage} alt="" />
                <h1>{props.description}</h1>
                <p>{props.price} €</p>
                <ButtonAddBasket />
            </Link>
        </div >
    )
}