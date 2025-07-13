import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings } from '../features/listings/actions';
import { useParams } from 'react-router-dom';

const ListingDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const listing = useSelector((state) => state.listings.listing);
    const loading = useSelector((state) => state.listings.loading);
    const error = useSelector((state) => state.listings.error);

    useEffect(() => {
        dispatch(fetchListings());
    }, [dispatch, id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="listing-details">
            <h1 className="text-2xl font-bold">{listing.title}</h1>
            <img src={listing.imageUrl} alt={listing.title} className="w-full h-auto" />
            <p className="mt-4">{listing.description}</p>
            <p className="mt-2 text-lg font-semibold">Price: ${listing.price}</p>
            <p className="mt-2">Category: {listing.category}</p>
            <p className="mt-2">Posted by: {listing.user.name}</p>
        </div>
    );
};

export default ListingDetails;