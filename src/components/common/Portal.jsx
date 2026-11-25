import { createPortal } from 'react-dom';

export function Portal({ children, containerId = 'app-content' }) {
  if (typeof document === 'undefined') return null;
  const container =
    document.getElementById(containerId) ||
    document.getElementById('app-screen') ||
    document.body;
  return createPortal(children, container);
}
