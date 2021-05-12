import { productDatabase, findProduct } from '../../src/lib/database';

export default class Checkout {
    constructor(basket) {
        this.basket = basket;
    }

    async createSession(req, res) {

        // const session = await stripe.checkout.sessions.create({
        //     payment_method_types: ['card'],
        //     line_items: this.basket.map((element) => {
        //         return {
        //             price_data: {
        //                 currency: 'eur',
        //                 product_data: {
        //                     name: 'Stubborn Attachments',
        //                     images: ['https://i.imgur.com/EHyR2nP.png'],
        //                 },
        //                 unit_amount: 200000,
        //             },
        //             quantity: 1,
        //         }
        //     }),
        //     mode: 'payment',
        //     success_url: `${YOUR_DOMAIN}/success`,
        //     cancel_url: `${YOUR_DOMAIN}/cancel`,
        // });
        // res.json({ id: session.id });
    }
}