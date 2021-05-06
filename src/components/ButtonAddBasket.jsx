import { useLocation } from 'react-router-dom';



export default function ButtonAddBasket(props) {
    const l = useLocation();

    return (
        <>
            <button className="button_add_basket" /* onClick={'#'} */>Ajouter</button>
        </>
    )
}