import { useState, useEffect } from 'react';
import { getStoredUser, getExperienceMode } from '../data/userProfile';

export function useUserProfile() {
  const [user, setUser] = useState(getStoredUser);
  const [mode, setMode] = useState(getExperienceMode);

  useEffect(() => {
    const handleSync = () => {
      setUser(getStoredUser());
      setMode(getExperienceMode());
    };

    window.addEventListener('storage', handleSync);
    return () => {
      window.removeEventListener('storage', handleSync);
    };
  }, []);

  return {
    user,
    mode,
    isJunior: mode === 'junior',
  };
}
