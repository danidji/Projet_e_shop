import { findProduct } from '../../../lib/database';
import SetQuantity from '../../SetQuantity';
import { AppContext } from '../../../AppContext';
import { useContext } from 'react';

import { FaRegTrashAlt } from "react-icons/fa";



export default function BasketHoverCard(props) {
    const context = useContext(AppContext);

    let myProduct = findProduct(props.id);

    //suppression de l'article au click sur la poubelle
    function handleClick(productCode) {
        context.clearBasket(productCode)
    }


    return (
        <div className="basket_card">
            <div className="img">

                <img className="hover_image" src={myProduct.urlImage} alt="" />
            </div>
            <div className="info_article">
                <p className="title pl_2">{myProduct.description}</p>
                <div className="price pl_2">
                    {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(myProduct.unitPrice)}

                    <div className="qty">Qté : {props.quantity}</div>
                    {/* <SetQuantity id={props.id} qty={props.quantity} /> */}
                    <FaRegTrashAlt className="delete" onClick={() => handleClick(myProduct.productCode)} />

                </div>

            </div>


        </div>
    )

}