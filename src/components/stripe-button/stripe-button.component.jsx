import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51H3aB5Bvi7KdagdetTVzbqFsNxMYb2MKKfcE5R8UHQYm1uMMNn5OrPppEGMBqTZUtvuGcVypf1ybQC5POsZLiYVB008pn2GSL2';

    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Fashionvilla'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;