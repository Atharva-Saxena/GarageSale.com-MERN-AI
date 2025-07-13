import React from 'react';

const Card = ({ listing }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <img src={listing.imageUrl} alt={listing.title} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-lg font-semibold mt-2">{listing.title}</h2>
            <p className="text-gray-600">{listing.description}</p>
            <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold">${listing.price}</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
            </div>
        </div>
    );
};

export default Card;