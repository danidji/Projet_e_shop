import { AppContext } from '../AppContext';
import { useContext } from 'react';
import { PlusSquareOutlined } from '@ant-design/icons';
import { MinusSquareOutlined } from '@ant-design/icons';



export default function SetQuantity(props) {
    const context = useContext(AppContext);

    const handleclick = (productCode, qty, sens, e) => {
        // e.preventDefault();
        context.setQuantityBasket(productCode, qty, sens, e);
    }

    return (
        <div className="product_quantity pl_2">
            <button className="setting quantity less" onClick={(e) => handleclick(props.id, props.qty, -1, e)}><MinusSquareOutlined className='icon' /></button>
            <div className="setting">{props.qty}</div>
            <button className="setting quantity more" onClick={(e) => handleclick(props.id, props.qty, 1, e)}><PlusSquareOutlined className='icon' /></button>
        </div>
    )

}