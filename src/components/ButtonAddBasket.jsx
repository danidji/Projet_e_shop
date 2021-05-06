import { useLocation } from 'react-router-dom';
// import clsx from 'clsx';
import { PlusCircleOutlined } from '@ant-design/icons';
<PlusCircleOutlined />


export default function ButtonAddBasket(props) {
    const l = useLocation();

    console.log(l.pathname.includes('produit'));

    return (
        <>
            {l.pathname.includes('produit')
                ? <button className={"button_add_basket"} /* onClick={'#'} */>Ajouter</button>
                : <button className={"button_add_basket "} /* onClick={'#'} */><PlusCircleOutlined /></button>
            }
        </>
    )
}