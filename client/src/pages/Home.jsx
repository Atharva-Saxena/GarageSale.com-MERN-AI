import React from 'react';
import Filters from '../components/Filters';

const Home = () => {
    const handleFilterChange = (filters) => {
        console.log('Filters changed:', filters);
        // Add filter logic here later
    };

    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-6xl font-bold text-white mb-6 gradient-text">
                        🏠 GarageSale.com
                    </h1>
                    <p className="text-2xl text-white/90 mb-4">Find Amazing Deals in Your Neighborhood</p>
                    <p className="text-lg text-white/70">Buy and sell items locally with ease ✨</p>
                </div>
                
                <div className="mb-12">
                    <Filters onFilterChange={handleFilterChange} />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Sample listings for demo */}
                    <div className="glass-effect card-hover overflow-hidden">
                        <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                            <span className="text-white text-lg font-medium">📷 Add Your Photo</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3">Create Your First Listing!</h3>
                            <p className="text-white/80 mb-4">Start selling your items and connect with your community</p>
                            <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold text-white">$0</span>
                                <button className="btn-primary">
                                    Get Started 🚀
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="glass-effect card-hover overflow-hidden">
                        <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                            <span className="text-white text-lg font-medium">🛍️ Browse Items</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3">Discover Great Deals</h3>
                            <p className="text-white/80 mb-4">Find amazing items from your neighbors</p>
                            <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold text-white">Browse</span>
                                <button className="btn-primary">
                                    Explore 🔍
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="glass-effect card-hover overflow-hidden">
                        <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center">
                            <span className="text-white text-lg font-medium">💬 Chat & Connect</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3">Safe Communication</h3>
                            <p className="text-white/80 mb-4">Chat securely with buyers and sellers</p>
                            <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold text-white">Chat</span>
                                <button className="btn-primary">
                                    Connect 🤝
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;