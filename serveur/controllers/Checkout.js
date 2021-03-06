const YOUR_DOMAIN = 'http://localhost:3000';
const db = require('../db');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = class Checkout {
    constructor(basket, voucher) {
        this.basket = basket;
        this.voucher = voucher;
    }
    returnlineItems() {
        return this.basket.map((element) => {
            let product = db.findProduct(element.productCode);

            return {
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: `${product.description}`,
                        images: [`${product.urlImage}`],
                    },
                    unit_amount: product.unitPrice * 100,
                },
                quantity: element.qty,
            }
        })
    }
    async createSession(req, res) {


        try {

            const mySession = {
                payment_method_types: ['card'],
                line_items: this.returnlineItems()
                , mode: 'payment',
                success_url: `${YOUR_DOMAIN}/success`,
                cancel_url: `${YOUR_DOMAIN}/cancel`,
            }

            if (req.body.voucherRate !== null) {

                const coupon = await stripe.coupons.create({
                    percent_off: this.voucher,
                    duration: 'once',
                });
                mySession.discounts = [{
                    coupon: coupon.id
                }]
            }

            const session = await stripe.checkout.sessions.create(mySession);
            res.json({ id: session.id });
        } catch (err) {
            console.log('erreur ===>', err.message);
        }
    }
}