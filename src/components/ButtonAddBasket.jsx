import { useLocation, useParams } from 'react-router-dom';
import React, { useContext } from 'react';
// import clsx from 'clsx';
import { PlusCircleOutlined } from '@ant-design/icons';

import { AppContext } from '../AppContext';




export default function ButtonAddBasket(props) {
    const l = useLocation();
    const p = useParams();
    const context = useContext(AppContext);

    const handleclick = (productCode, e) => {
        e.preventDefault()
        context.addToBasket(productCode)
    }

    return (
        <>
            {l.pathname.includes('produit')
                ? <button className={"button_add_basket produit"} onClick={(e) => handleclick(p.id, e)}>Ajouter au panier</button>
                : <button className={"button_add_basket accueil"} onClick={(e) => handleclick(props.id, e)}><PlusCircleOutlined /></button>
            }
        </>
    )
}