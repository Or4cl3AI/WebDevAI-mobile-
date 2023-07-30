```javascript
import React, { useState } from 'react';

const Subscription = () => {
  const [subscription, setSubscription] = useState('free');

  const handleSubscriptionChange = (event) => {
    setSubscription(event.target.value);
  };

  const processSubscription = (event) => {
    event.preventDefault();
    // Here, we would typically send the subscription data to the server
    console.log(`User has subscribed to the ${subscription} tier`);
  };

  return (
    <div id="subscription-form">
      <h2>Choose your subscription tier</h2>
      <form onSubmit={processSubscription}>
        <label>
          <input
            type="radio"
            value="free"
            checked={subscription === 'free'}
            onChange={handleSubscriptionChange}
          />
          Free
        </label>
        <label>
          <input
            type="radio"
            value="$15/month"
            checked={subscription === '$15/month'}
            onChange={handleSubscriptionChange}
          />
          $15/month
        </label>
        <label>
          <input
            type="radio"
            value="$30/month"
            checked={subscription === '$30/month'}
            onChange={handleSubscriptionChange}
          />
          $30/month
        </label>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Subscription;
```