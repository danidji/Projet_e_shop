import BasketCard from './BasketCard';

export default function BasketList(props) {

    return (
        <div className="basket_list">
            {props.basket.map((element, i) => {
                return <BasketCard id={element.productCode} qty={element.qty} key={i} />
            })}

        </div>

    )
}