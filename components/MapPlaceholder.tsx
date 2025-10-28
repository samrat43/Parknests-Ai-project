
import React from 'react';
import type { ParkingSpot } from '../types';
import { EVChargerIcon, ParkingPinIcon, UserLocationIcon } from './icons';

interface MapPlaceholderProps {
  spots: ParkingSpot[];
  onSelectSpot: (spot: ParkingSpot) => void;
  userLocation: { latitude: number; longitude: number; } | null;
}

const getAvailabilityColor = (availability: ParkingSpot['availability']) => {
  switch (availability) {
    case 'available':
      return 'text-green-500';
    case 'occupied':
      return 'text-red-500';
    case 'booked':
      return 'text-yellow-500';
    default:
      return 'text-gray-500';
  }
};

export const MapPlaceholder: React.FC<MapPlaceholderProps> = ({ spots, onSelectSpot, userLocation }) => {
  return (
    <div className="w-full h-full bg-gray-300 overflow-hidden relative bg-cover bg-center" style={{backgroundImage: "url('https://i.imgur.com/3Z7kRzJ.png')"}}>
      {/* User Location Pin */}
      {userLocation && (
        <div className="absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <UserLocationIcon className="h-8 w-8 text-blue-500 animate-pulse" />
        </div>
      )}

      {/* Mock Parking Spot Pins */}
      {spots.map((spot, index) => {
        const positions = [
            { top: '30%', left: '20%' },
            { top: '65%', left: '35%' },
            { top: '40%', left: '75%' },
            { top: '70%', left: '80%' },
        ];
        const pos = positions[index % positions.length];
        return (
          <button key={spot.id} onClick={() => onSelectSpot(spot)} className="absolute transform -translate-x-1/2 -translate-y-full" style={pos}>
            <div className="relative flex flex-col items-center cursor-pointer group">
              <div className={`absolute -top-10 mb-2 w-max px-2 py-1 bg-white text-gray-800 text-xs font-bold rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity`}>
                  ${spot.pricePerHour.toFixed(2)}/hr
              </div>
              <ParkingPinIcon className={`h-10 w-10 drop-shadow-lg ${getAvailabilityColor(spot.availability)}`} />
              {spot.features.evCharging && <EVChargerIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 text-white"/>}
            </div>
          </button>
        )
      })}
    </div>
  );
};
