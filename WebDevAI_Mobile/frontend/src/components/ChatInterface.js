```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatInterface = () => {
    const [chatMessage, setChatMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const processChat = async (e) => {
        e.preventDefault();
        const response = await axios.post('/api/chatbot', { message: chatMessage });
        setChatHistory([...chatHistory, { message: chatMessage, response: response.data }]);
        setChatMessage('');
    };

    useEffect(() => {
        // Fetch previous chat history from local storage or server if needed
    }, []);

    return (
        <div id="chat-interface">
            <div className="chat-history">
                {chatHistory.map((chat, index) => (
                    <div key={index}>
                        <p>User: {chat.message}</p>
                        <p>AI: {chat.response}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={processChat}>
                <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Type your message here..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatInterface;
```