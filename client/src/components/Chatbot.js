import React, { useState, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        // Add an initial greeting from the bot
        const botMessage = { text: 'Hello! Need help?', sender: 'bot' };
        setMessages([botMessage]);
    }, []);

    const handleSend = () => {
        if (input.trim()) {
            // Add user message
            const userMessage = { text: input, sender: 'user' };
            setMessages((prevMessages) => [...prevMessages, userMessage]);

            // Get bot response based on input
            const botResponse = getBotResponse(input);
            const botMessage = { text: botResponse, sender: 'bot' };
            setMessages((prevMessages) => [...prevMessages, botMessage]);

            // Clear input
            setInput('');
        }
    };

    const getBotResponse = (input) => {
        const lowerInput = input.toLowerCase();
        
        if (lowerInput.includes('what are msme') || lowerInput.includes('what is msme') || lowerInput.includes('msme meaning')) {
            return "MSMEs stand for Micro, Small, and Medium Enterprises. They are categorized based on their investment in plant and machinery, and they play a crucial role in the economic development of a country by providing employment and supporting local economies.";
        } else if (lowerInput.includes('msme') || lowerInput.includes('msmes')) {
            return "MSMEs (Micro, Small, and Medium Enterprises) contribute significantly to the manufacturing output and employment in many countries. They often face challenges like limited access to finance, technology, and markets.";
        } else if (lowerInput.includes('investor')) {
            return "Investors are individuals or entities that provide capital to businesses with the expectation of a financial return. They can be crucial in supporting startups and growing businesses.";
        } else {
            return "I'm sorry, I can only provide information about MSMEs and investors.";
        }
    };

    return (
        <div className="chatbot">
            <div className="chatbot-messages">
                {messages.map((message, index) => (
                    <div key={index} className={message.sender}>
                        {message.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default Chatbot;
