import { findProduct } from '../../lib/database';
import SetQuantity from '../SetQuantity';
import { CloseOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';


export default function BasketCard(props) {
    let myProduct = findProduct(props.id);
    // console.log(`BasketCard -> myProduct`, myProduct)

    const context = useContext(AppContext)

    function handleClick(productCode) {
        console.log(`handleClick -> productCode`, productCode)
        context.clearBasket(productCode)
    }


    return (
        <div className="basket_card">
            <img src={myProduct.urlImage} alt="" />
            <div className="price pl_2">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(myProduct.unitPrice)}  <CloseOutlined className="close" onClick={() => handleClick(props.id)} /></div>

            <p className="title pl_2">{props.id} - {myProduct.description}</p>
            <SetQuantity id={props.id} qty={props.qty} />


        </div>
    )
}