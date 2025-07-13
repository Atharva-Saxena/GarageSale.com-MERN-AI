// filepath: c:\Users\HP\OneDrive\Desktop\MERNproj\GarageSale.com\server\routes\listingRoutes.js

const express = require('express');
const { 
    createListing, 
    getAllListings, 
    getListingById, 
    updateListing, 
    deleteListing 
} = require('../controllers/listingController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

const router = express.Router();

// Route to create a new listing
router.post('/', jwtMiddleware, createListing);

// Route to get all listings
router.get('/', getAllListings);

// Route to get a specific listing by ID
router.get('/:id', getListingById);

// Route to update a specific listing by ID
router.put('/:id', jwtMiddleware, updateListing);

// Route to delete a specific listing by ID
router.delete('/:id', jwtMiddleware, deleteListing);

module.exports = router;