import BasketCard from './BasketCard';

export default function BasketList(props) {

    return (
        <div className="basket_list">
            <h3>Votre panier d'achats</h3>
            {props.basket.map((element, i) => {
                return <BasketCard id={element.productCode} qty={element.qty} key={i} />
            })}

        </div>

    )
}