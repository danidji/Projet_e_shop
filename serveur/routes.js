const Checkout = require('./controllers/Checkout');

module.exports = (app) => {
    app.post('/proceder-paiement', async (req, res) => {
        let basket = req.body.basket;
        let voucher = 0;
        if (req.body.voucherRate !== null) {
            voucher = req.body.voucherRate * 100;
        }
        console.log(`app.post -> req.body`, req.body)
        console.log(`app.post -> voucher`, voucher)
        // console.log(`app.post -> req.body`, req.body)

        //création d'une session pour le paiement
        let repo = new Checkout(basket, voucher);
        await repo.createSession(req, res);
    })

}