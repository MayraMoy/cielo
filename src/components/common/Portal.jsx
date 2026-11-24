import { createPortal } from 'react-dom';

export function Portal({ children, containerId = 'app-screen' }) {
  if (typeof document === 'undefined') return null;
  const container = document.getElementById(containerId) || document.body;
  return createPortal(children, container);
}
