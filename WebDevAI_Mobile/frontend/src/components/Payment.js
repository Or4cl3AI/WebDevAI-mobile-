```javascript
import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
    const [paymentMessage, setPaymentMessage] = useState('');

    const processPayment = async (event) => {
        event.preventDefault();

        const form = event.target;
        const data = new FormData(form);

        try {
            const response = await axios.post('/payments', data);
            setPaymentMessage(response.data.message);
        } catch (error) {
            setPaymentMessage('Payment processing failed. Please try again.');
        }
    };

    return (
        <div id="payment-form">
            <h2>Payment</h2>
            <form onSubmit={processPayment}>
                <label>
                    Card Number:
                    <input type="text" name="cardNumber" required />
                </label>
                <label>
                    Expiry Date:
                    <input type="text" name="expiryDate" required />
                </label>
                <label>
                    CVV:
                    <input type="text" name="cvv" required />
                </label>
                <button type="submit">Submit Payment</button>
            </form>
            {paymentMessage && <p>{paymentMessage}</p>}
        </div>
    );
};

export default Payment;
```