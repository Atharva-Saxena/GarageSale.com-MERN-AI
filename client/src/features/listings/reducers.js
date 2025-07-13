// filepath: c:\Users\HP\OneDrive\Desktop\MERNproj\GarageSale.com\client\features\listings\reducers.js

import { 
  FETCH_LISTINGS_SUCCESS, 
  FETCH_LISTINGS_FAIL, 
  CREATE_LISTING_SUCCESS, 
  CREATE_LISTING_FAIL, 
  UPDATE_LISTING_SUCCESS, 
  UPDATE_LISTING_FAIL, 
  DELETE_LISTING_SUCCESS, 
  DELETE_LISTING_FAIL 
} from './types';

const initialState = {
  listings: [],
  loading: false,
  error: null,
};

const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LISTINGS_SUCCESS:
      return {
        ...state,
        listings: action.payload,
        loading: false,
      };
    case FETCH_LISTINGS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CREATE_LISTING_SUCCESS:
      return {
        ...state,
        listings: [...state.listings, action.payload],
        loading: false,
      };
    case CREATE_LISTING_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case UPDATE_LISTING_SUCCESS:
      return {
        ...state,
        listings: state.listings.map(listing =>
          listing._id === action.payload._id ? action.payload : listing
        ),
        loading: false,
      };
    case UPDATE_LISTING_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case DELETE_LISTING_SUCCESS:
      return {
        ...state,
        listings: state.listings.filter(listing => listing._id !== action.payload),
        loading: false,
      };
    case DELETE_LISTING_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default listingsReducer;