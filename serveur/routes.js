const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const YOUR_DOMAIN = 'http://localhost:3000'

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send("Salut mec bien")
    })
    app.post('/proceder-paiement', async (req, res) => {
        console.log(req.body.basket);
        let basket = req.body.basket;
        let productDatabase = req.body.productDatabase


        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Stubborn Attachments',
                            images: ['https://i.imgur.com/EHyR2nP.png'],
                        },
                        unit_amount: 200000,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}/success`,
            cancel_url: `${YOUR_DOMAIN}/cancel`,
        });
        res.json({ id: session.id });




        // res.send("/proceder-paiement")
    })

}