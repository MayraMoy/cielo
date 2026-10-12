import { useState, useEffect, useCallback } from 'react';
import {
  getStoredUser,
  getExperienceMode,
  setExperienceModeOverride,
} from '../data/userProfile';

export function useUserProfile() {
  const [user, setUser] = useState(getStoredUser);
  const [mode, setMode] = useState(getExperienceMode);

  useEffect(() => {
    const handleSync = () => {
      setUser(getStoredUser());
      setMode(getExperienceMode());
    };

    window.addEventListener('cielo-mode-change', handleSync);
    window.addEventListener('storage', handleSync);
    return () => {
      window.removeEventListener('cielo-mode-change', handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, []);

  const toggleMode = useCallback(() => {
    const nextMode = mode === 'junior' ? 'adult' : 'junior';
    setExperienceModeOverride(nextMode);
    setMode(nextMode);
  }, [mode]);

  const selectMode = useCallback((targetMode) => {
    setExperienceModeOverride(targetMode);
    setMode(targetMode);
  }, []);

  return {
    user,
    mode,
    isJunior: mode === 'junior',
    toggleMode,
    selectMode,
  };
}
