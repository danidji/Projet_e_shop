const YOUR_DOMAIN = 'http://localhost:3000';
const db = require('../db');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);



module.exports = class Checkout {
    constructor(basket) {
        this.basket = basket;
        console.log('class checkout')
    }
    async returnlineItems(basket) {
        return await this.basket.map((element) => {
            let product = db.findProduct(element.productCode);
            return {
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: product.description,
                        images: [product.urlImage],
                    },
                    unit_amount: product.unitPrice,
                },
                quantity: element.qty,
            }
        })
    }

    async createSession(req, res) {

        console.log('async function ');
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: await this.returnlineItems(this.basket)
            // line_items: [
            //     {
            //         price_data: {
            //             currency: 'eur',
            //             product_data: {
            //                 name: 'Stubborn Attachments',
            //                 images: ['https://i.imgur.com/EHyR2nP.png'],
            //             },
            //             unit_amount: 200000,
            //         },
            //         quantity: 1,
            //     },
            //     {
            //         price_data: {
            //             currency: 'eur',
            //             product_data: {
            //                 name: 'Stubborn Attachments',
            //                 images: ['https://i.imgur.com/EHyR2nP.png'],
            //             },
            //             unit_amount: 200,
            //         },
            //         quantity: 1,
            //     },
            //     {
            //         price_data: {
            //             currency: 'eur',
            //             product_data: {
            //                 name: 'Stubborn Attachments',
            //                 images: ['https://i.imgur.com/EHyR2nP.png'],
            //             },
            //             unit_amount: 20,
            //         },
            //         quantity: 1,
            //     }
            // ]





            , mode: 'payment',
            success_url: `${YOUR_DOMAIN}/success`,
            cancel_url: `${YOUR_DOMAIN}/cancel`,
        });
        console.log(`Checkout -> createSession -> session`, session)

        res.json({ id: session.id });
    }
}