import ProductCard from '../components/ProductCard';


export default function ProductList(props) {


    return (
        <div className="product_list">
            {props.products.map((element, i) => {
                return <ProductCard id={element.productCode} description={element.description} price={element.unitPrice} urlImage={element.urlImage} key={i} />
            })}
        </div>
    )
}