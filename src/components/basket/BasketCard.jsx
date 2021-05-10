import { findProduct } from '../../lib/database';
import SetQuantity from '../SetQuantity';



export default function BasketCard(props) {
    let myProduct = findProduct(props.id);
    console.log(`BasketCard -> myProduct`, myProduct)


    return (
        <div className="basket_card">
            <img src={myProduct.urlImage} alt="" />
            <div className="price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(myProduct.unitPrice)}</div>
            <p>{props.id} - {myProduct.description}</p>
            <SetQuantity id={props.id} qty={props.qty} />


        </div>
    )
}