// filepath: c:\Users\HP\OneDrive\Desktop\MERNproj\GarageSale.com\server\controllers\chatController.js

const Chat = require('../models/Chat');

// Create a new chat message
exports.createChatMessage = async (req, res) => {
    try {
        const { listingId, senderId, message } = req.body;
        const newChatMessage = new Chat({ listingId, senderId, message });
        await newChatMessage.save();
        res.status(201).json(newChatMessage);
    } catch (error) {
        res.status(500).json({ message: 'Error creating chat message', error });
    }
};

// Get chat messages for a specific listing
exports.getChatMessages = async (req, res) => {
    try {
        const { listingId } = req.params;
        const chatMessages = await Chat.find({ listingId }).sort({ createdAt: 1 });
        res.status(200).json(chatMessages);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching chat messages', error });
    }
};

// Delete a chat message
exports.deleteChatMessage = async (req, res) => {
    try {
        const { messageId } = req.params;
        await Chat.findByIdAndDelete(messageId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting chat message', error });
    }
};