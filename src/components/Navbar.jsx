import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
import BasketHover from './basket/on-hover/BasketHover';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { HomeOutlined } from '@ant-design/icons';



export default function Navbar(props) {

    const context = useContext(AppContext);
    // console.log(`Navbar -> context`, context)
    const [state, setState] = useState({
        getHoverBasket: false
    })

    function handleHoverBasket() {
        setState({ getHoverBasket: true });
    }

    function quitHoverBasket() {
        setState({ getHoverBasket: false });
    }

    function handleclick() {
        setState({ getHoverBasket: false });
    }



    return (
        <ul className="navbar">
            <li className="logo">E-Shop</li>
            <li>
                <ul className="link_page">
                    <li><Link className="link navbar_home" to={'/'}><HomeOutlined /></Link></li>
                    <li><Link className="link navbar_basket" to={'/panier'} onMouseEnter={(e) => handleHoverBasket(e)} onClick={() => handleclick()}><ShoppingCartOutlined />{context.basket.length > 0 &&
                        <span className="nb_product">{context.basket.length}</span>
                    }</Link></li>
                    {state.getHoverBasket &&
                        <BasketHover getHoverBasket={state.getHoverBasket} onQuit={quitHoverBasket} />
                    }
                    {/* <BasketHover getHoverBasket={state.getHoverBasket} onQuit={quitHoverBasket} /> */}
                </ul>
            </li>
        </ul>
    );
}

