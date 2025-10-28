
import React, { useState } from 'react';
import type { ParkingSpot } from '../types';
import { MapPlaceholder } from './MapPlaceholder';
import { SpotCard } from './SpotCard';
import { geminiPredictAvailability } from '../services/geminiService';
import { useGeolocation } from '../hooks/useGeolocation';
import { SearchIcon, AITipIcon } from './icons';

interface DriverDashboardProps {
  spots: ParkingSpot[];
  onSelectSpot: (spot: ParkingSpot) => void;
}

export const DriverDashboard: React.FC<DriverDashboardProps> = ({ spots, onSelectSpot }) => {
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isLoadingPrediction, setIsLoadingPrediction] = useState(false);
  const { location, error } = useGeolocation();

  const handlePredict = async () => {
    setIsLoadingPrediction(true);
    setPrediction(null);
    try {
      const locationString = location ? `lat: ${location.latitude}, lon: ${location.longitude}` : 'downtown';
      const result = await geminiPredictAvailability(locationString, new Date());
      setPrediction(result);
    } catch (err) {
      setPrediction('Sorry, could not fetch a prediction at this time.');
    } finally {
      setIsLoadingPrediction(false);
    }
  };
  
  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="relative h-1/2 md:h-3/5">
        <MapPlaceholder spots={spots} onSelectSpot={onSelectSpot} userLocation={location} />
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-11/12 max-w-md">
           <div className="relative">
                <input
                    type="text"
                    placeholder="Search for a destination..."
                    className="w-full px-4 py-3 pl-10 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
        </div>
      </div>
      <div className="flex-grow bg-white rounded-t-2xl shadow-2xl -mt-4 p-4 overflow-y-auto">
        <div className="mb-4">
            <button onClick={handlePredict} disabled={isLoadingPrediction} className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity disabled:opacity-50">
                <AITipIcon className="h-5 w-5"/>
                <span>{isLoadingPrediction ? 'Analyzing...' : 'AI Parking Forecast'}</span>
            </button>
            {prediction && (
                <div className="mt-3 p-3 bg-blue-50 border-l-4 border-blue-400 text-blue-800 rounded-r-lg">
                    <p className="text-sm">{prediction}</p>
                </div>
            )}
            {error && (
                <div className="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded-r-lg">
                    <p className="text-sm">Could not get your location: {error}. Defaulting to city center.</p>
                </div>
            )}
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-3">Nearby Spots</h2>
        <div className="space-y-3">
          {spots.map(spot => (
            <SpotCard key={spot.id} spot={spot} onSelect={onSelectSpot} />
          ))}
        </div>
      </div>
    </div>
  );
};
