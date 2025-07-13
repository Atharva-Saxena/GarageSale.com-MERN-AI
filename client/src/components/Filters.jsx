import React from 'react';

const Filters = ({ onFilterChange }) => {
    const [filters, setFilters] = React.useState({
        category: '',
        minPrice: '',
        maxPrice: '',
        searchTerm: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
        onFilterChange({ ...filters, [name]: value });
    };

    return (
        <div className="glass-effect p-6">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">🔍 Find Your Perfect Deal</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                    <input
                        type="text"
                        name="searchTerm"
                        placeholder="Search items..."
                        value={filters.searchTerm}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    />
                </div>
                
                <div className="relative">
                    <select
                        name="category"
                        value={filters.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all appearance-none cursor-pointer"
                    >
                        <option value="" className="text-gray-800">All Categories</option>
                        <option value="electronics" className="text-gray-800">📱 Electronics</option>
                        <option value="furniture" className="text-gray-800">🪑 Furniture</option>
                        <option value="clothing" className="text-gray-800">👕 Clothing</option>
                        <option value="books" className="text-gray-800">📚 Books</option>
                        <option value="other" className="text-gray-800">🎯 Other</option>
                    </select>
                </div>
                
                <div className="relative">
                    <input
                        type="number"
                        name="minPrice"
                        placeholder="Min Price ($)"
                        value={filters.minPrice}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    />
                </div>
                
                <div className="relative">
                    <input
                        type="number"
                        name="maxPrice"
                        placeholder="Max Price ($)"
                        value={filters.maxPrice}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    />
                </div>
            </div>
        </div>
    );
};

export default Filters;