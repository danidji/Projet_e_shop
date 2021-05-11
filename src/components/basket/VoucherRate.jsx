export default function VoucherRate(props) {
    // console.log(`VoucherRate -> props`, props)

    return (
        <div className="voucher_rate">
            <input type="text" className="voucher_rate" placeholder="Entrer un code promo :" onChange={props.onChange} value={props.val} />
            <button onClick={props.onClick}>ok</button>

        </div>
    )
}