// filepath: c:\Users\HP\OneDrive\Desktop\MERNproj\GarageSale.com\server\services\categorizationService.js

const categorizeItem = (item) => {
    // Example categorization logic based on item attributes
    const { title, description, category } = item;

    if (category) {
        return category;
    }

    if (title.includes('furniture') || description.includes('furniture')) {
        return 'Furniture';
    } else if (title.includes('clothing') || description.includes('clothing')) {
        return 'Clothing';
    } else if (title.includes('electronics') || description.includes('electronics')) {
        return 'Electronics';
    } else {
        return 'Miscellaneous';
    }
};

module.exports = {
    categorizeItem,
};