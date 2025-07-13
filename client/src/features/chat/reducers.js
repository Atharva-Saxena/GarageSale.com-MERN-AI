import { CHAT_SEND_MESSAGE, CHAT_RECEIVE_MESSAGE, CHAT_LOAD_MESSAGES } from './types';

const initialState = {
  messages: [],
  loading: false,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_LOAD_MESSAGES:
      return {
        ...state,
        messages: action.payload,
        loading: false,
      };
    case CHAT_SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case CHAT_RECEIVE_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

export default chatReducer;