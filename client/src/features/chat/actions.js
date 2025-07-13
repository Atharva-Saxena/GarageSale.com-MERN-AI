// filepath: c:\Users\HP\OneDrive\Desktop\MERNproj\GarageSale.com\client\features\chat\actions.js

import { CHAT_SEND_MESSAGE, CHAT_RECEIVE_MESSAGE, CHAT_LOAD_MESSAGES } from './types';
import axios from 'axios';

// Action creator for fetching messages
export const fetchMessages = (listingId) => async (dispatch) => {
    try {
        const response = await axios.get(`/api/chat/${listingId}`);
        dispatch({
            type: CHAT_LOAD_MESSAGES,
            payload: response.data,
        });
    } catch (error) {
        console.error('Error fetching messages:', error);
    }
};

// Action creator for sending a message
export const sendMessage = (listingId, message) => async (dispatch) => {
    try {
        const response = await axios.post(`/api/chat/${listingId}`, { message });
        dispatch({
            type: CHAT_SEND_MESSAGE,
            payload: response.data,
        });
    } catch (error) {
        console.error('Error sending message:', error);
    }
};