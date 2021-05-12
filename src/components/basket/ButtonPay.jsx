import axios from "axios";
import { AppContext } from '../../AppContext';
import { useContext } from 'react';
import { productDatabase } from '../../lib/database';
//Utilisation de stripe - doc : https://stripe.com/docs/payments/accept-a-payment
import { loadStripe } from '@stripe/stripe-js';



const stripePromise = loadStripe('pk_test_51IqE57LfOA7FkbGkmubyopsSrUpBv3v2x4hRuZxIBo6pjuDqpGHKy1X7QN5urQyW6vNRs09GsU7c4eB2ep44xRHl00HsYFSjSM');

export default function ButtonPay(props) {
    const context = useContext(AppContext);
    let basket = context.basket;


    async function handleclick() {

        const stripe = await stripePromise;

        await axios.post('/proceder-paiement', { basket }).then((response) => {

            console.log(response);
            // return response.json();
            return stripe.redirectToCheckout({ sessionId: response.data.id });
        })

    }



    return <button className="button_pay" onClick={() => handleclick()}>Payer</button>
};
