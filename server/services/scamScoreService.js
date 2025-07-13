const calculateScamScore = (listing) => {
    let score = 0;

    // Example criteria for scoring
    if (listing.price < 0) {
        score += 50; // Invalid price
    }
    if (!listing.title || listing.title.length < 5) {
        score += 20; // Title too short
    }
    if (listing.images.length === 0) {
        score += 30; // No images provided
    }
    if (listing.description && listing.description.length < 20) {
        score += 10; // Description too short
    }

    // Additional checks can be added here

    return score;
};

const isScamLikely = (score) => {
    return score > 50; // Threshold for scam likelihood
};

module.exports = {
    calculateScamScore,
    isScamLikely,
};