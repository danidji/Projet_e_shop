import { AppContext } from '../../../AppContext';
import { useContext } from 'react';
import BasketHoverCard from './BasketHoverCard';

export default function BasketHover(props) {
    const context = useContext(AppContext);
    let basket = context.basket;


    function getBasketList() {
        return (
            basket.map((element, i) => {

                return <BasketHoverCard id={element.productCode} quantity={element.qty} key={i} />
            })
        )

    }

    return (
        <div className="basket_hover" onMouseLeave={() => props.onMouseLeave()}>
            <h4>Mon panier</h4>
            <div className="basket_hover_list">
                {getBasketList()}
            </div>
        </div>
    )
}