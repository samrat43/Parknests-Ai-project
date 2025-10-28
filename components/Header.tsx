
import React from 'react';
import type { UserMode } from '../types';
import { LogoIcon } from './icons';

interface HeaderProps {
  userMode: UserMode;
  setUserMode: (mode: UserMode) => void;
}

export const Header: React.FC<HeaderProps> = ({ userMode, setUserMode }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <LogoIcon className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Parknests</h1>
        </div>
        <div className="flex items-center space-x-2 bg-gray-200 p-1 rounded-full">
          <button
            onClick={() => setUserMode('driver')}
            className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors ${
              userMode === 'driver'
                ? 'bg-blue-600 text-white shadow'
                : 'text-gray-600'
            }`}
          >
            Driver
          </button>
          <button
            onClick={() => setUserMode('host')}
            className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors ${
              userMode === 'host'
                ? 'bg-blue-600 text-white shadow'
                : 'text-gray-600'
            }`}
          >
            Host
          </button>
        </div>
      </div>
    </header>
  );
};
