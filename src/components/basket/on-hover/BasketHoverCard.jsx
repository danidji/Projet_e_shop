import { findProduct } from '../../../lib/database';

export default function BasketHoverCard(props) {

    let myProduct = findProduct(props.id);
    console.log(`BasketHoverCard -> myProduct`, myProduct)
    // console.log(`BasketHoverCard -> props`, props)


    return (
        <div className="basket_card">
            <img className="hover_image" src={myProduct.urlImage} alt="" />
            <div className="price pl_2">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(myProduct.unitPrice)} {/*  <CloseOutlined onClick={() => handleClick(props.productCode)} /> */}</div>

            <p className="title pl_2">{myProduct.productCode} - {myProduct.description}</p>
            {/* <SetQuantity id={props.id} qty={props.qty} /> */}

        </div>
    )

}