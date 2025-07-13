// filepath: c:\Users\HP\OneDrive\Desktop\MERNproj\GarageSale.com\server\controllers\listingController.js

const Listing = require('../models/Listing');

// Create a new listing
exports.createListing = async (req, res) => {
    try {
        const newListing = new Listing(req.body);
        await newListing.save();
        res.status(201).json(newListing);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all listings
exports.getAllListings = async (req, res) => {
    try {
        const listings = await Listing.find();
        res.status(200).json(listings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single listing by ID
exports.getListingById = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) {
            return res.status(404).json({ message: 'Listing not found' });
        }
        res.status(200).json(listing);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a listing by ID
exports.updateListing = async (req, res) => {
    try {
        const updatedListing = await Listing.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedListing) {
            return res.status(404).json({ message: 'Listing not found' });
        }
        res.status(200).json(updatedListing);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a listing by ID
exports.deleteListing = async (req, res) => {
    try {
        const deletedListing = await Listing.findByIdAndDelete(req.params.id);
        if (!deletedListing) {
            return res.status(404).json({ message: 'Listing not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};