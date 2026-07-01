import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Reading } from '../types';
import { mockReadings } from '../data/mockData';

interface ReadingsContextType {
  readings: Reading[];
  addReading: (reading: Reading) => void;
  updateReadingStatus: (id: string, status: Reading['status']) => void;
  getReadingsBySite: (siteId: string) => Reading[];
  getReadingsByUser: (userId: string) => Reading[];
  getTodayReadingsCount: () => number;
}

const ReadingsContext = createContext<ReadingsContextType | undefined>(undefined);

export const ReadingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [readings, setReadings] = useState<Reading[]>(mockReadings);

  const addReading = (reading: Reading) => {
    setReadings(prev => [reading, ...prev]);
  };

  const updateReadingStatus = (id: string, status: Reading['status']) => {
    setReadings(prev =>
      prev.map(r => (r.id === id ? { ...r, status } : r))
    );
  };

  const getReadingsBySite = (siteId: string) => {
    return readings.filter(r => r.siteId === siteId);
  };

  const getReadingsByUser = (userId: string) => {
    return readings.filter(r => r.userId === userId);
  };

  const getTodayReadingsCount = () => {
    return 2; // Mock: 2 out of 5 completed today
  };

  return (
    <ReadingsContext.Provider
      value={{
        readings,
        addReading,
        updateReadingStatus,
        getReadingsBySite,
        getReadingsByUser,
        getTodayReadingsCount,
      }}
    >
      {children}
    </ReadingsContext.Provider>
  );
};

export const useReadings = (): ReadingsContextType => {
  const context = useContext(ReadingsContext);
  if (!context) {
    throw new Error('useReadings must be used within a ReadingsProvider');
  }
  return context;
};
