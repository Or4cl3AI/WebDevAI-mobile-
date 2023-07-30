```javascript
const express = require('express');
const router = express.Router();

// Mocked database for storing user subscriptions
let userSubscriptions = [];

router.post('/subscribe', (req, res) => {
    const { userId, subscriptionTier } = req.body;

    if (!userId || !subscriptionTier) {
        return res.status(400).json({ message: 'Missing required fields.' });
    }

    const existingSubscription = userSubscriptions.find(sub => sub.userId === userId);

    if (existingSubscription) {
        return res.status(400).json({ message: 'User already has a subscription.' });
    }

    userSubscriptions.push({ userId, subscriptionTier });

    return res.status(200).json({ message: 'Subscription successful.' });
});

router.get('/subscription/:userId', (req, res) => {
    const { userId } = req.params;

    const userSubscription = userSubscriptions.find(sub => sub.userId === userId);

    if (!userSubscription) {
        return res.status(404).json({ message: 'No subscription found for this user.' });
    }

    return res.status(200).json(userSubscription);
});

module.exports = router;
```