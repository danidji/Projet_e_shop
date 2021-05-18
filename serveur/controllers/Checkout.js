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
            const coupon = await stripe.coupons.create({
                percent_off: this.voucher,
                duration: 'once',
            });
            // const coupon12 = await stripe.coupons.create({
            //     percent_off: 12,
            //     duration: 'once',
            // });
            // const coupon15 = await stripe.coupons.create({
            //     percent_off: 15,
            //     duration: 'once',
            // });
            // const coupon25 = await stripe.coupons.create({
            //     percent_off: 25,
            //     duration: 'once',
            // });
            // const promotionCode12 = await stripe.promotionCodes.create({
            //     coupon: coupon12.id,
            //     code: 'NOEL2020',
            // });
            // const promotionCode15 = await stripe.promotionCodes.create({
            //     coupon: coupon15.id,
            //     code: 'ANNIVERSAIRE',
            // });
            // const promotionCode25 = await stripe.promotionCodes.create({
            //     coupon: coupon25.id,
            //     code: 'SOLDES_ETE',
            // });

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: this.returnlineItems()
                , mode: 'payment',
                discounts: [{
                    coupon: coupon.id,
                }],
                // allow_promotion_codes: true,
                success_url: `${YOUR_DOMAIN}/success`,
                cancel_url: `${YOUR_DOMAIN}/cancel`,
            });
            res.json({ id: session.id });
        } catch (err) {
            console.log('erreur', err.message);
        }
    }
}