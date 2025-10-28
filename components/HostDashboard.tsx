
import React from 'react';
import { mockHostListings } from '../constants';
import type { HostListing } from '../types';
import { PlusIcon, DollarSignIcon, CarIcon, ChartIcon } from './icons';

const StatCard: React.FC<{ icon: React.ReactNode; title: string; value: string; color: string }> = ({ icon, title, value, color }) => (
    <div className={`p-4 rounded-lg shadow-md flex items-center space-x-3 ${color}`}>
        <div className="text-2xl">{icon}</div>
        <div>
            <p className="text-sm font-medium opacity-80">{title}</p>
            <p className="text-xl font-bold">{value}</p>
        </div>
    </div>
);

const ListingCard: React.FC<{ listing: HostListing }> = ({ listing }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
        <img src={listing.imageUrl} alt={listing.name} className="w-1/3 object-cover" />
        <div className="p-4 flex-grow">
            <h3 className="font-bold text-gray-800">{listing.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{listing.address}</p>
            <div className="flex justify-between items-center text-sm">
                <div>
                    <p className="text-gray-600">Occupancy</p>
                    <p className="font-semibold">{listing.occupiedSpots}/{listing.totalSpots}</p>
                </div>
                <div>
                    <p className="text-gray-600">Earnings (Month)</p>
                    <p className="font-semibold text-green-600">${listing.monthlyEarnings.toFixed(2)}</p>
                </div>
            </div>
        </div>
    </div>
);

export const HostDashboard: React.FC = () => {
    const totalEarnings = mockHostListings.reduce((acc, curr) => acc + curr.monthlyEarnings, 0);

  return (
    <div className="container mx-auto p-4 space-y-6">
        <div>
            <h2 className="text-2xl font-bold text-gray-800">Host Dashboard</h2>
            <p className="text-gray-500">Manage your spaces and earnings.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard icon={<DollarSignIcon />} title="Total Monthly Earnings" value={`$${totalEarnings.toFixed(2)}`} color="bg-green-100 text-green-800"/>
            <StatCard icon={<CarIcon />} title="Spots Occupied" value={`${mockHostListings.reduce((a,c) => a + c.occupiedSpots, 0)}`} color="bg-blue-100 text-blue-800"/>
            <StatCard icon={<ChartIcon />} title="Occupancy Rate" value="75%" color="bg-yellow-100 text-yellow-800"/>
        </div>

        <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-800">Your Listings</h3>
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
                <PlusIcon className="h-5 w-5"/>
                <span>List a New Space</span>
            </button>
        </div>

        <div className="space-y-4">
            {mockHostListings.map(listing => <ListingCard key={listing.id} listing={listing} />)}
        </div>
    </div>
  );
};
