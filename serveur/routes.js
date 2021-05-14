const Checkout = require('./controllers/Checkout');

module.exports = (app) => {
    app.post('/proceder-paiement', async (req, res) => {
        let basket = req.body.basket;

        //création d'une session pour le paiement
        let repo = new Checkout(basket);
        await repo.createSession(req, res);
    })

}