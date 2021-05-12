import { findProduct } from '../../lib/database';

export default function BasketHoverCard(props) {
    console.log(`BasketHoverCard -> props`, props)

    return (
        <div className="basket_card">
            <img className="hover" src={props.urlImage} alt="" />
            <div className="price pl_2">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(props.unitPrice)} {/*  <CloseOutlined onClick={() => handleClick(props.productCode)} /> */}</div>

            <p className="title pl_2">{props.productCode} - {props.description}</p>
            {/* <SetQuantity id={props.id} qty={props.qty} /> */}

        </div>
    )

}