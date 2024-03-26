const stripe = require('stripe')('sk_test_51OyRN5HS8OgzbKuN1yupOveJUk0NlQaAFv3bhGZA3Qk7TGGTpIksCdLfYZT6xDcagzLljrtsvcIQodMLjbd6vkjs00cMWX9vwz');
module.exports = async function postCheckout(products){
    const session = await stripe.checkout.sessions.create({
      success_url: 'http://localhost:3000/success',
      line_items: [products],
      mode: 'payment',
    });

    return session
}
