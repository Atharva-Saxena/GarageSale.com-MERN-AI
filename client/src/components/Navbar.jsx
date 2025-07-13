import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-white text-2xl font-bold hover:text-blue-200">
                        🏠 GarageSale.com
                    </Link>
                    <div className="flex space-x-6">
                        <Link to="/" className="text-white hover:text-blue-200 px-3 py-2 rounded-md transition duration-200">
                            Home
                        </Link>
                        <Link to="/create" className="text-white hover:text-blue-200 px-3 py-2 rounded-md transition duration-200">
                            Sell Item
                        </Link>
                        <Link to="/login" className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md font-medium transition duration-200">
                            Login
                        </Link>
                        <Link to="/register" className="bg-blue-700 text-white hover:bg-blue-800 px-4 py-2 rounded-md font-medium transition duration-200">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;