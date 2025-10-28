
import React, { useState } from 'react';
import type { ParkingSpot } from '../types';
import { ClockIcon, CreditCardIcon, CloseIcon } from './icons';

interface BookingModalProps {
  spot: ParkingSpot;
  onClose: () => void;
  onConfirm: (spotId: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ spot, onClose, onConfirm }) => {
  const [duration, setDuration] = useState(1); // in hours

  const handleDurationChange = (change: number) => {
    setDuration(prev => Math.max(1, prev + change));
  };

  const totalPrice = (spot.pricePerHour * duration).toFixed(2);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end z-30" onClick={onClose}>
      <div className="bg-white w-full max-w-lg rounded-t-2xl p-6 shadow-xl relative animate-slide-up" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <CloseIcon className="h-6 w-6" />
        </button>
        
        <div className="flex items-start space-x-4">
            <img src={spot.imageUrl} alt={spot.name} className="w-24 h-24 rounded-lg object-cover" />
            <div>
                <h2 className="text-2xl font-bold text-gray-900">{spot.name}</h2>
                <p className="text-gray-600">{spot.address}</p>
            </div>
        </div>

        <div className="my-6">
            <h3 className="font-semibold text-gray-800 mb-2">Booking Duration</h3>
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                <ClockIcon className="h-6 w-6 text-gray-500" />
                <div className="flex items-center space-x-4">
                    <button onClick={() => handleDurationChange(-1)} className="bg-gray-200 text-gray-700 font-bold w-8 h-8 rounded-full">-</button>
                    <span className="text-lg font-bold w-16 text-center">{duration} hour{duration > 1 ? 's' : ''}</span>
                    <button onClick={() => handleDurationChange(1)} className="bg-gray-200 text-gray-700 font-bold w-8 h-8 rounded-full">+</button>
                </div>
            </div>
        </div>

        <div className="my-6">
            <h3 className="font-semibold text-gray-800 mb-2">Payment Details</h3>
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                <div className="flex items-center space-x-3">
                    <CreditCardIcon className="h-6 w-6 text-gray-500" />
                    <span>Visa **** 4242</span>
                </div>
                <button className="text-sm font-semibold text-blue-600">Change</button>
            </div>
        </div>

        <div className="border-t pt-4">
            <div className="flex justify-between items-center text-xl font-bold">
                <span>Total Price</span>
                <span>${totalPrice}</span>
            </div>
            <button
                onClick={() => onConfirm(spot.id)}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg mt-4 text-lg hover:bg-blue-700 transition-colors"
            >
                Confirm & Pay
            </button>
        </div>
      </div>
      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.3s ease-out; }
      `}</style>
    </div>
  );
};
