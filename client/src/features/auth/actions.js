// filepath: c:\Users\HP\OneDrive\Desktop\MERNproj\GarageSale.com\client\features\auth\actions.js

import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL } from './types';
import axios from 'axios';

// Action creator for user login
export const loginUser = (credentials) => async (dispatch) => {
    try {
        const response = await axios.post('/api/auth/login', credentials);
        localStorage.setItem('token', response.data.token);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data,
        });
        alert('Login successful!');
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response?.data?.message || 'Login failed',
        });
        alert('Login failed: ' + (error.response?.data?.message || 'Unknown error'));
    }
};

// Action creator for user registration
export const registerUser = (userData) => async (dispatch) => {
    try {
        const response = await axios.post('/api/auth/register', userData);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data,
        });
        alert('Registration successful! Please login.');
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response?.data?.message || 'Registration failed',
        });
        alert('Registration failed: ' + (error.response?.data?.message || 'Unknown error'));
    }
};