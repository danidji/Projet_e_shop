import axios from "axios";
import { AppContext } from '../../AppContext';
import { useContext } from 'react';


export default function ButtonPay(props) {
    const context = useContext(AppContext);
    let basket = context.basket;


    function handleclick() {

        axios.post('/proceder-paiement', basket).then((response) => {

            console.log(response);

        })

    }



    return <button className="button_pay" onClick={() => handleclick()}>Payer</button>
};
