import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../AppContext';
import { findProduct } from '../../lib/database'

export default function BasketTotal(props) {

    const [state, setState] = useState({
        totalPrice: 0
    })
    const context = useContext(AppContext);
    console.log(`BasketTotal -> context`, context)
    let basket = context.basket;
    console.log(`BasketTotal -> basket`, basket)

    function getTotal() {
        let total = basket.map((element) => {
            return findProduct(element.productCode).unitPrice * element.qty
        })
        return total.reduce((a, b) => a + b)
    }

    // let total = getTotal()




    useEffect(() => {

        setState({ totalPrice: getTotal() })

    }, [context])

    return (



        <div className="basket_total">
            <h3>Total</h3>
            <p>Prix ht - 99€</p>
            <p>Tva - 99€</p>
            <input type="text" name="voucher_rate" id="voucher_rate" placeholder="Entrer un code promo :" />
            <p>Prix TTC - {state.totalPrice}</p>
        </div>

    )
}