```javascript
const express = require('express');
const router = express.Router();
const OpenAI = require('openai');
const fs = require('fs');

// Load GPT-3 Configuration
const gpt3Config = JSON.parse(fs.readFileSync('../../nlp/gpt3_config.json', 'utf8'));
const openai = new OpenAI(gpt3Config.apiKey);

// Process chat messages
router.post('/processChat', async (req, res) => {
    const chatMessage = req.body.chatMessage;

    try {
        const gptResponse = await openai.complete({
            engine: 'text-davinci-003',
            prompt: chatMessage,
            max_tokens: 60
        });

        const chatResponse = gptResponse.data.choices[0].text.trim();
        res.json({ chatResponse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error processing chat message' });
    }
});

// Generate recommendations
router.post('/generateRecommendations', async (req, res) => {
    const landingPageDescription = req.body.landingPageDescription;

    try {
        const gptResponse = await openai.complete({
            engine: 'text-davinci-003',
            prompt: `Given the following landing page description: ${landingPageDescription}. What are 3-5 recommendations to enhance the design, content, or user experience?`,
            max_tokens: 200
        });

        const recommendations = gptResponse.data.choices[0].text.trim();
        res.json({ recommendations });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error generating recommendations' });
    }
});

module.exports = router;
```