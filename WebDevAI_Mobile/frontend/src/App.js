```javascript
import React from 'react';
import ChatInterface from './components/ChatInterface';
import LandingPage from './components/LandingPage';
import Subscription from './components/Subscription';
import Payment from './components/Payment';
import Recommendations from './components/Recommendations';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WebDevAI Mobile</h1>
      </header>
      <main>
        <ChatInterface />
        <LandingPage />
        <Subscription />
        <Payment />
        <Recommendations />
      </main>
    </div>
  );
}

export default App;
```