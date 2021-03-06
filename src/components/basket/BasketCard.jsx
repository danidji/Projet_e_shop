import { findProduct } from '../../lib/database';
import SetQuantity from '../SetQuantity';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { setCurrency } from '../../lib/utilities';
import { FaRegTrashAlt } from "react-icons/fa";

export default function BasketCard(props) {
    let myProduct = findProduct(props.id);

    const context = useContext(AppContext)

    function handleClick(productCode) {
        context.clearBasket(productCode)
    }


    return (
        <div className="basket_card">
            <img src={myProduct.urlImage} alt="" />
            <div className="price pl_2">{setCurrency(myProduct.unitPrice)}  <FaRegTrashAlt className="close" onClick={() => handleClick(props.id)} /></div>

            <p className="title pl_2">{props.id} - {myProduct.description}</p>
            <SetQuantity id={props.id} qty={props.qty} />


        </div>
    )
}