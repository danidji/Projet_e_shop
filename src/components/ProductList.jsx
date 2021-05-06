import ProductCard from '../components/ProductCard';
import { useHistory, useLocation, useParams } from 'react-router-dom';


export default function ProductList(props) {


    let h = useHistory();
    console.log(`h`, h)
    let l = useLocation();
    console.log(`l`, l)
    let p = useParams();
    console.log(`p`, p)


    return (
        <div className="product_list">
            {props.products.map((element, i) => {
                return <ProductCard id={element.productCode} description={element.description} price={element.unitPrice} urlImage={element.urlImage} key={i} />
            })}
        </div>
    )
}