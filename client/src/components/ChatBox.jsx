import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage, fetchMessages } from '../features/chat/actions';

const ChatBox = ({ listingId }) => {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.chat.messages);
    const [message, setMessage] = useState('');

    useEffect(() => {
        dispatch(fetchMessages(listingId));
    }, [dispatch, listingId]);

    const handleSendMessage = () => {
        if (message.trim()) {
            dispatch(sendMessage(listingId, message));
            setMessage('');
        }
    };

    return (
        <div className="chat-box">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        <strong>{msg.sender}: </strong>{msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="message-input"
            />
            <button onClick={handleSendMessage} className="send-button">Send</button>
        </div>
    );
};

export default ChatBox;