```javascript
import React, { useState, useEffect } from 'react';

const LandingPage = () => {
    const [landingPageContent, setLandingPageContent] = useState('');

    useEffect(() => {
        // Fetch the landing page content from the server when the component mounts
        fetch('/api/landingPage')
            .then(response => response.json())
            .then(data => setLandingPageContent(data.content));
    }, []);

    return (
        <div id="landing-page">
            <div dangerouslySetInnerHTML={{ __html: landingPageContent }} />
        </div>
    );
};

export default LandingPage;
```