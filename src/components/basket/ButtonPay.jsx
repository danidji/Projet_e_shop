import axios from "axios";
import { AppContext } from '../../AppContext';
import { useContext } from 'react';

//Utilisation de stripe - doc : https://stripe.com/docs/payments/accept-a-payment
import { loadStripe } from '@stripe/stripe-js';



const stripePromise = loadStripe('pk_test_51IqE57LfOA7FkbGkmubyopsSrUpBv3v2x4hRuZxIBo6pjuDqpGHKy1X7QN5urQyW6vNRs09GsU7c4eB2ep44xRHl00HsYFSjSM');

export default function ButtonPay(props) {
    const context = useContext(AppContext);
    let basket = context.basket;
    let voucherRate = context.voucherRate
    let voucherName = context.voucherName


    async function handleclick() {

        const stripe = await stripePromise;
        //Génération de la route pour procéder au paiement
        //  => envoi du panier dans le req.body
        axios.post('/proceder-paiement', { basket, voucherRate, voucherName }).then((response) => {

            return stripe.redirectToCheckout({ sessionId: response.data.id });
        })

    }



    return <button className="button_pay" onClick={() => handleclick()}>Payer</button>
};
