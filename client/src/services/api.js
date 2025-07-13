import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Auth API calls
export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
};

export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
};

// Listings API calls
export const fetchListings = async (filters) => {
    const response = await axios.get(`${API_URL}/listings`, { params: filters });
    return response.data;
};

export const createListing = async (listingData) => {
    const response = await axios.post(`${API_URL}/listings`, listingData);
    return response.data;
};

export const updateListing = async (id, listingData) => {
    const response = await axios.put(`${API_URL}/listings/${id}`, listingData);
    return response.data;
};

export const deleteListing = async (id) => {
    const response = await axios.delete(`${API_URL}/listings/${id}`);
    return response.data;
};

// Chat API calls
export const fetchChat = async (listingId) => {
    const response = await axios.get(`${API_URL}/chat/${listingId}`);
    return response.data;
};

export const sendMessage = async (listingId, messageData) => {
    const response = await axios.post(`${API_URL}/chat/${listingId}`, messageData);
    return response.data;
};