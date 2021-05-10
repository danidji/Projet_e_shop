import React from 'react';
import BasketList from '../components/basket/BasketList';
import BasketTotal from '../components/basket/BasketTotal';
import { AppContext } from '../AppContext';
import { useContext } from 'react';

export default function Basket(props) {
    const context = useContext(AppContext);

    return (
        <div className="basket_page">
            < BasketList basket={context.basket} />
            < BasketTotal />
        </div>
    )

}