// filepath: c:\Users\HP\OneDrive\Desktop\MERNproj\GarageSale.com\client\features\listings\actions.js

import axios from 'axios';
import { 
    FETCH_LISTINGS_REQUEST, 
    FETCH_LISTINGS_SUCCESS, 
    FETCH_LISTINGS_FAIL, 
    CREATE_LISTING_REQUEST, 
    CREATE_LISTING_SUCCESS, 
    CREATE_LISTING_FAIL, 
    UPDATE_LISTING_REQUEST, 
    UPDATE_LISTING_SUCCESS, 
    UPDATE_LISTING_FAIL, 
    DELETE_LISTING_REQUEST, 
    DELETE_LISTING_SUCCESS, 
    DELETE_LISTING_FAIL 
} from './types';

// Fetch listings
export const fetchListings = () => async (dispatch) => {
    dispatch({ type: FETCH_LISTINGS_REQUEST });
    try {
        const { data } = await axios.get('/api/listings');
        dispatch({ type: FETCH_LISTINGS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_LISTINGS_FAIL, payload: error.response.data.message });
    }
};

// Create listing
export const createListing = (listingData) => async (dispatch) => {
    dispatch({ type: CREATE_LISTING_REQUEST });
    try {
        const { data } = await axios.post('/api/listings', listingData);
        dispatch({ type: CREATE_LISTING_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_LISTING_FAIL, payload: error.response.data.message });
    }
};

// Update listing
export const updateListing = (id, listingData) => async (dispatch) => {
    dispatch({ type: UPDATE_LISTING_REQUEST });
    try {
        const { data } = await axios.put(`/api/listings/${id}`, listingData);
        dispatch({ type: UPDATE_LISTING_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_LISTING_FAIL, payload: error.response.data.message });
    }
};

// Delete listing
export const deleteListing = (id) => async (dispatch) => {
    dispatch({ type: DELETE_LISTING_REQUEST });
    try {
        await axios.delete(`/api/listings/${id}`);
        dispatch({ type: DELETE_LISTING_SUCCESS, payload: id });
    } catch (error) {
        dispatch({ type: DELETE_LISTING_FAIL, payload: error.response.data.message });
    }
};