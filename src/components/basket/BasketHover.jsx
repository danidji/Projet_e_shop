export default function BasketHover(props) {
    // console.log(`BasketHover -> props`, props)


    return (
        <div className="basket_hover" onMouseLeave={() => props.onMouseLeave()}>

        </div>
    )
}