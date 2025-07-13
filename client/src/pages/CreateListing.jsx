import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createListing } from '../features/listings/actions';

const CreateListing = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        category: '',
        images: []
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createListing(formData));
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Create New Listing</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-md h-32"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Price ($)</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-md"
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="electronics">Electronics</option>
                        <option value="furniture">Furniture</option>
                        <option value="clothing">Clothing</option>
                        <option value="books">Books</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Create Listing
                </button>
            </form>
        </div>
    );
};

export default CreateListing;