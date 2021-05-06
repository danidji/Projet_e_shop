import React from 'react';
import { Link } from 'react-router-dom';

import { ShoppingCartOutlined } from '@ant-design/icons';


export default function Navbar(props) {
    return (
        <ul className="navbar">
            <li className="logo">E-Shop</li>
            <li>
                <ul className="link_page">
                    <li><Link exact className="link navbar_home" to={'/'}>Accueil</Link></li>
                    <li><Link exact className="link navbar_basket" to={'/panier'}><ShoppingCartOutlined /><span className="nb_product">1</span></Link></li>
                </ul>
            </li>
        </ul>
    );
}

