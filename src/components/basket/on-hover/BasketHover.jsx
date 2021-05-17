import { AppContext } from '../../../AppContext';
import { useContext } from 'react';
import BasketHoverCard from './BasketHoverCard';

export default function BasketHover(props) {
    // console.log(`BasketHover -> props`, props)
    const context = useContext(AppContext);
    let basket = context.basket;
    function getBasketList() {
        return (
            basket.map((element, i) => {
                console.log(`basket.map -> element`, element)

                return <BasketHoverCard id={element} key={i} />
            })
        )

    }

    return (
        <div className="basket_hover" onMouseLeave={() => props.onMouseLeave()}>
            <h4>Panier</h4>
            <div className="basket_hover_list">
                {getBasketList()}
            </div>
        </div>
    )
}