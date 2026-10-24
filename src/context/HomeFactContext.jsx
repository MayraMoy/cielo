import { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export const HomeFactContext = createContext(0);

export function HomeFactProvider({ children }) {
  const { pathname } = useLocation();
  const [visit, setVisit] = useState({ pathname, index: 0 });

  // Keep the counter above the routes so leaving Home does not reset it.
  // Adjust only on a real path change, never on theme/language re-renders.
  if (visit.pathname !== pathname) {
    const returningHome = pathname === '/home' || pathname === '/inicio';
    setVisit({ pathname, index: visit.index + (returningHome ? 1 : 0) });
  }

  return <HomeFactContext.Provider value={visit.index}>{children}</HomeFactContext.Provider>;
}
