import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';

import { ShoppingCartOutlined } from '@ant-design/icons';
import { HomeOutlined } from '@ant-design/icons';



export default function Navbar(props) {

    const context = useContext(AppContext);
    // console.log(`Navbar -> context`, context)


    return (
        <ul className="navbar">
            <li className="logo">E-Shop</li>
            <li>
                <ul className="link_page">
                    <li><Link className="link navbar_home" to={'/'}><HomeOutlined /></Link></li>
                    <li><Link className="link navbar_basket" to={'/panier'}><ShoppingCartOutlined />{context.basket.length > 0 &&
                        <span className="nb_product">{context.basket.length}</span>
                    }</Link></li>
                </ul>
            </li>
        </ul>
    );
}

