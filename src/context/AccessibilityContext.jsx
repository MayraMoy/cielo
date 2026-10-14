import { createContext, useState, useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const AccessibilityContext = createContext({
  isLargeText: false,
  toggleLargeText: () => {},
});

const ACCESSIBILITY_STORAGE_KEY = 'cielo_large_text';

export function AccessibilityProvider({ children }) {
  const [isLargeText, setIsLargeText] = useState(() => {
    try {
      return localStorage.getItem(ACCESSIBILITY_STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(ACCESSIBILITY_STORAGE_KEY, String(isLargeText));
    } catch (e) {
      console.error('Error al guardar preferencia de accesibilidad:', e);
    }
  }, [isLargeText]);

  const toggleLargeText = () => setIsLargeText((prev) => !prev);

  return (
    <AccessibilityContext.Provider value={{ isLargeText, toggleLargeText }}>
      {children}
    </AccessibilityContext.Provider>
  );
}
