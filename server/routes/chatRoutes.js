// filepath: c:\Users\HP\OneDrive\Desktop\MERNproj\GarageSale.com\server\routes\chatRoutes.js

const express = require('express');
const { getChatMessages, createChatMessage } = require('../controllers/chatController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

const router = express.Router();

// Route to get chat messages for a specific listing
router.get('/:listingId', jwtMiddleware, getChatMessages);

// Route to send a message in the chat
router.post('/:listingId', jwtMiddleware, createChatMessage);

module.exports = router;