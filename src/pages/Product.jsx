import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';


export default function Product(props) {
    let p = useParams();
    console.log(`p`, p)

    return (
        <div className="product_page">
            < h1 > Bienvenue sur mon site</h1 >
        </div>

    )

}