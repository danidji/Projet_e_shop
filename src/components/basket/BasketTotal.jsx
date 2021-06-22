import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../AppContext';
import { findVoucher } from '../../lib/database';
import { setCurrency } from '../../lib/utilities';
import VoucherRate from './VoucherRate';
import ButtonPay from './ButtonPay';


export default function BasketTotal(props) {

    const [state, setState] = useState({
        totalPrice: 0
        , tva: 0
        , HTprice: 0
        , inputValue: ""
        , infoVoucher: ""
        , useVoucher: false
    })

    const context = useContext(AppContext);

    function getTva(price) {
        return price * 0.05
    }

    function getVoucher() {

        //Si le code saisie est bien un code promo, j'applique celui ci sur le total
        if (findVoucher(state.inputValue)) {

            let voucher = findVoucher(state.inputValue)
            //calcul nouveau total
            let newTotal = state.totalPrice - (voucher * state.totalPrice)
            setState({ ...state, totalPrice: newTotal, tva: getTva(newTotal), HTprice: newTotal - getTva(newTotal), infoVoucher: `Promo de -${voucher * 100}% appliqué`, useVoucher: true });

            //On stocke le voucher dans le contexte pour l'envoyer au back
            context.setVoucherRate(voucher, state.inputValue);
        }
        //sinon je retourne le total normal    
        else {
            setState({ ...state, totalPrice: context.getTotal(), tva: getTva(context.getTotal()), HTprice: context.getTotal() - getTva(context.getTotal()), infoVoucher: 'Code promo non valide' });
        }
    }

    //Supprimer la promo au clic sur 'X'
    function removeVoucher() {
        context.removeVoucher();
        setState({ ...state, totalPrice: context.getTotal(), tva: getTva(context.getTotal()), HTprice: context.getTotal() - getTva(context.getTotal()), inputValue: "", infoVoucher: "", useVoucher: false });
    }

    //Enregistrement de la valeur saisie dans l'input Voucher
    function handleChange(e) {
        setState({ ...state, inputValue: e.target.value });

        // permet de gerer le state de manière synchrone pour récupérer la dernière valeur connue du state
        // setState((state) => { return { ...state, inputValue: e.target.value } })
    }

    //Lorsque que le panier change, on applique le nouveau total
    useEffect(() => {
        let total = context.getTotal()
        //Si j'ai un code promo d'appliqué, je l'applique sur mon total
        if (findVoucher(state.inputValue) !== false) {
            total = total - (findVoucher(state.inputValue) * total)
        }

        setState({
            ...state
            , totalPrice: total
            , tva: getTva(total)
            , HTprice: total - getTva(total)
        })

    }, [context])

    return (

        <div className="basket_total">
            <h3>Total</h3>
            <p>Prix ht - {setCurrency(state.HTprice)}</p>
            <p>Tva 5.5% - {setCurrency(state.tva)}</p>
            <VoucherRate onChange={handleChange} onClick={() => getVoucher()} val={state.inputValue} onClickDelete={removeVoucher} infoVoucher={state.infoVoucher} use={state.useVoucher} />
            <p>Prix TTC - {setCurrency(state.totalPrice)}</p>
            <ButtonPay />
        </div>

    )
}