import React from 'react';
import BasketList from '../components/basket/BasketList';
import { AppContext } from '../AppContext';
import { useContext } from 'react';

export default function Basket(props) {
    const context = useContext(AppContext);

    return (
        <div className="basket_page">
            <h1>Votre panier d'achats</h1>
            < BasketList basket={context.basket} />
        </div>
    )

}