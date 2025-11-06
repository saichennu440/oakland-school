import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Campus } from '../types';

interface CampusContextType {
  campus: Campus | null;
  setCampus: (campus: Campus) => void;
  hasSelectedCampus: boolean;
}

const CampusContext = createContext<CampusContextType | undefined>(undefined);

export function CampusProvider({ children }: { children: ReactNode }) {
  const [campus, setCampusState] = useState<Campus | null>(null);
  const [hasSelectedCampus, setHasSelectedCampus] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('oakland-campus');
    if (stored && (stored === 'playschool' || stored === 'regular')) {
      setCampusState(stored);
      setHasSelectedCampus(true);
    }
  }, []);

  const setCampus = (newCampus: Campus) => {
    setCampusState(newCampus);
    setHasSelectedCampus(true);
    localStorage.setItem('oakland-campus', newCampus);
  };

  return (
    <CampusContext.Provider value={{ campus, setCampus, hasSelectedCampus }}>
      {children}
    </CampusContext.Provider>
  );
}

export function useCampus() {
  const context = useContext(CampusContext);
  if (context === undefined) {
    throw new Error('useCampus must be used within a CampusProvider');
  }
  return context;
}
