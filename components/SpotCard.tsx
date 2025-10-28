
import React from 'react';
import type { ParkingSpot } from '../types';
import { StarIcon, EVChargerIcon, CoveredIcon, AccessibleIcon } from './icons';

interface SpotCardProps {
  spot: ParkingSpot;
  onSelect: (spot: ParkingSpot) => void;
}

const AvailabilityBadge: React.FC<{ availability: ParkingSpot['availability'] }> = ({ availability }) => {
  const baseClasses = "px-2 py-1 text-xs font-bold rounded-full capitalize";
  if (availability === 'available') {
    return <div className={`${baseClasses} bg-green-100 text-green-800`}>Available</div>;
  }
  if (availability === 'booked') {
    return <div className={`${baseClasses} bg-yellow-100 text-yellow-800`}>Booked by You</div>;
  }
  return <div className={`${baseClasses} bg-red-100 text-red-800`}>Occupied</div>;
};

export const SpotCard: React.FC<SpotCardProps> = ({ spot, onSelect }) => {
  return (
    <div
      onClick={() => spot.availability === 'available' && onSelect(spot)}
      className={`bg-white rounded-lg shadow-md overflow-hidden flex transition-transform transform hover:-translate-y-1 ${spot.availability === 'available' ? 'cursor-pointer' : 'opacity-70'}`}
    >
      <img src={spot.imageUrl} alt={spot.name} className="w-1/4 object-cover" />
      <div className="p-3 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-gray-800 text-md leading-tight">{spot.name}</h3>
            <AvailabilityBadge availability={spot.availability} />
          </div>
          <p className="text-sm text-gray-500">{spot.distance}</p>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
            <span>{spot.rating} ({spot.reviewCount} reviews)</span>
          </div>
        </div>
        <div className="flex justify-between items-end mt-2">
            <div className="flex space-x-2 text-gray-500">
                {spot.features.evCharging && <EVChargerIcon className="h-5 w-5" title="EV Charging"/>}
                {spot.features.covered && <CoveredIcon className="h-5 w-5" title="Covered Parking"/>}
                {spot.features.accessible && <AccessibleIcon className="h-5 w-5" title="Accessible"/>}
            </div>
          <div className="text-right">
            <p className="text-lg font-bold text-gray-900">${spot.pricePerHour.toFixed(2)}<span className="text-sm font-normal text-gray-500">/hr</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};
