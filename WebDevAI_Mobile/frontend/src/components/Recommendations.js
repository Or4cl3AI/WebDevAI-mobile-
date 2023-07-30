```javascript
import React, { useState, useEffect } from 'react';

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        // Fetch recommendations from the backend
        fetch('/api/recommendations')
            .then(response => response.json())
            .then(data => setRecommendations(data));
    }, []);

    return (
        <div id="recommendations">
            <h2>AI Recommendations</h2>
            {recommendations.length > 0 ? (
                <ul>
                    {recommendations.map((recommendation, index) => (
                        <li key={index}>{recommendation}</li>
                    ))}
                </ul>
            ) : (
                <p>No recommendations available at the moment.</p>
            )}
        </div>
    );
};

export default Recommendations;
```