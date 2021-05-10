import { AppContext } from '../AppContext';
import { useContext } from 'react';


export default function SetQuantity(props) {
    const context = useContext(AppContext);

    const handleclick = (productCode, qty, e) => {
        // e.preventDefault();
        context.setQuantityBasket(productCode, qty, e);
    }

    return (
        <div className="product_quantity">
            <button className="quantity less" onClick={(e) => handleclick(props.id, props.qty, e)}>-</button>
            <div>{props.qty}</div>
            <button className="quantity more" onClick={(e) => handleclick(props.id, props.qty, e)}>+</button>
        </div>
    )

}