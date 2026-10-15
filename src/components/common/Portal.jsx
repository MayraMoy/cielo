import { createPortal } from 'react-dom';

export function Portal({ children }) {
  if (typeof document === 'undefined') return null;
  const container = document.getElementById('app-screen') || document.body;
  return createPortal(children, container);
}
