export default function VoucherRate(props) {
    console.log(`VoucherRate -> props`, props)

    return (
        <div className="voucher_rate">
            <div className="input_voucher">
                <input type="text" className="voucher_rate" placeholder="Entrer un code promo :" onChange={props.onChange} value={props.val} />
                {!props.use
                    ? <button onClick={props.onClick}>ok</button>
                    : <button onClick={props.onClickDelete}>X</button>
                }
            </div>
            <p className="info">{props.infoVoucher}</p>
        </div>
    )
}