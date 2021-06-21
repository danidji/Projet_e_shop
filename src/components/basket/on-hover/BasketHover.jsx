import { AppContext } from '../../../AppContext';
import { useContext } from 'react';
import BasketHoverCard from './BasketHoverCard';
import { GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom';

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
        <div className="basket_hover" onMouseLeave={() => props.onQuit()}>
            <div className="head">
                <h4>Mon panier</h4>
                <GrClose onClick={() => props.onQuit()} />
            </div>
            <div className="basket_hover_list">
                {getBasketList()}
            </div>
            <div className="total_hover">

                <button className="button_pay" onClick={() => props.onQuit()} ><Link to={'/panier'}>Payer</Link></button>
            </div>
        </div>
    )
}