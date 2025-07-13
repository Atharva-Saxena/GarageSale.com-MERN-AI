import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './features/auth/reducers';
import listingsReducer from './features/listings/reducers';
import chatReducer from './features/chat/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  listings: listingsReducer,
  chat: chatReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;