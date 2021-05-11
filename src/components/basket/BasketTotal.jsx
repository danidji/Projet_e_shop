import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../AppContext';
import { findProduct } from '../../lib/database';
import VoucherRate from './VoucherRate';
// import { findVoucher } from '../../lib/database'
export default function BasketTotal(props) {

    const [state, setState] = useState({
        totalPrice: 0
        , tva: 0
        , HTprice: 0
        , inputValue: ""
        , useVoucherRate: false
        , infoVoucher: ""
    })

    const context = useContext(AppContext);
    let basket = context.basket;
    // context.clearBasket('SKY')
    // Retourne le total du panier
    function getTotal() {
        let total = basket.map((element) => {
            return findProduct(element.productCode).unitPrice * element.qty
        })
        return total.reduce((a, b) => a + b)
    }

    function getTva(price) {
        return price * 0.05
    }

    function getVoucher() {
        //Si le code saisie est bien un code promo, et si aucun code n'a été utilisé, j'applique celui sur le total
        // console.log(`getVoucher -> state.inputValue`, state.inputValue)
        if (context.setVoucherRate(state.inputValue) && !state.useVoucherRate) {

            let voucher = context.setVoucherRate(state.inputValue)
            //calcul nouveau total
            let newTotal = state.totalPrice - (voucher * state.totalPrice)
            setState({ ...state, totalPrice: newTotal, tva: getTva(newTotal), HTprice: newTotal - getTva(newTotal), useVoucherRate: true, infoVoucher: `Promo de -${voucher * 100}% appliqué` });
        } else if (context.setVoucherRate(state.inputValue) && state.useVoucherRate) {
            setState({ ...state, infoVoucher: 'Code promo déjà utilisé' })
        }

        //sinon je retourne le total normal    
        else {
            setState({ ...state, totalPrice: getTotal(), tva: getTva(getTotal()), HTprice: getTotal() - getTva(getTotal()), infoVoucher: 'Code promo non valide' })
        }
    }
    function handleChange(e) {

        setState({ ...state, inputValue: e.target.value })


        // permet de gerer le state de manière synchrone pour récupérer la dernière valeur connue du state
        // setState((state) => { return { ...state, inputValue: e.target.value } })
    }

    //Lorsque que le panier change, on applique le nouveau total
    useEffect(() => {

        setState({
            ...state
            , totalPrice: getTotal()
            , tva: getTva(getTotal())
            , HTprice: getTotal() - getTva(getTotal())
        })

    }, [context])

    return (

        <div className="basket_total">
            <h3>Total</h3>
            <p>Prix ht - {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(state.HTprice)}</p>
            <p>Tva 5.5% - {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(state.tva)}</p>
            <VoucherRate onChange={handleChange} onClick={() => getVoucher()} val={state.inputValue} infoVoucher={state.infoVoucher} />
            <p>Prix TTC - {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(state.totalPrice)}</p>
        </div>

    )
}