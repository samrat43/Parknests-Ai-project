
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { DriverDashboard } from './components/DriverDashboard';
import { HostDashboard } from './components/HostDashboard';
import { BookingModal } from './components/BookingModal';
import type { ParkingSpot, UserMode } from './types';
import { mockParkingSpots } from './constants';

const App: React.FC = () => {
  const [userMode, setUserMode] = useState<UserMode>('driver');
  const [spots, setSpots] = useState<ParkingSpot[]>(mockParkingSpots);
  const [selectedSpot, setSelectedSpot] = useState<ParkingSpot | null>(null);

  const handleSelectSpot = useCallback((spot: ParkingSpot) => {
    setSelectedSpot(spot);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedSpot(null);
  }, []);

  const handleBookingConfirm = useCallback((spotId: string) => {
    setSpots(prevSpots =>
      prevSpots.map(spot =>
        spot.id === spotId ? { ...spot, availability: 'booked' } : spot
      )
    );
    setSelectedSpot(null);
    // Here you would typically show a success message
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
      <Header userMode={userMode} setUserMode={setUserMode} />
      <main className="flex-grow">
        {userMode === 'driver' ? (
          <DriverDashboard spots={spots} onSelectSpot={handleSelectSpot} />
        ) : (
          <HostDashboard />
        )}
      </main>
      {selectedSpot && (
        <BookingModal
          spot={selectedSpot}
          onClose={handleCloseModal}
          onConfirm={handleBookingConfirm}
        />
      )}
    </div>
  );
};

export default App;
