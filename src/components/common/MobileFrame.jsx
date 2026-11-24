import { useLocation, useNavigate } from 'react-router-dom';
import { Lock, MoreVertical, RotateCw } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useAccessibility } from '../../hooks/useAccessibility';
import { BottomNavbar } from './BottomNavbar';

export function MobileFrame({ children }) {
  const { isDarkMode } = useTheme();
  const { isLargeText } = useAccessibility();
  const location = useLocation();
  const navigate = useNavigate();

  const isGoogleAuthPage = location.pathname.startsWith('/auth/google');
  const isAuthPage =
    location.pathname === '/' ||
    location.pathname === '/register' ||
    isGoogleAuthPage;
  const effectiveDarkMode = isGoogleAuthPage ? false : isDarkMode;
  const showBottomNavbar =
    !isAuthPage &&
    !location.pathname.startsWith('/trivia') &&
    !location.pathname.startsWith('/juegos');

  const activeTab = location.pathname.startsWith('/library') ||
    location.pathname.startsWith('/profile') ||
    location.pathname.startsWith('/perfil')
    ? 'library'
    : location.pathname.startsWith('/scan') ||
      location.pathname.startsWith('/scanner') ||
      location.pathname.startsWith('/trivia')
    ? 'scan'
    : location.pathname.startsWith('/fire-safety')
    ? ''
    : 'home';

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center p-2 sm:p-5 select-none font-['Poppins'] transition-colors duration-200 ${
        effectiveDarkMode ? 'bg-[#101314]' : 'bg-[var(--app-frame)]'
      }`}
    >
      {/* Marco exterior del Celular */}
      <div
        id="app-screen"
        className={`relative w-full max-w-[390px] h-[844px] max-h-[96vh] rounded-[50px] border-[10px] sm:border-[12px] shadow-[0_25px_60px_-10px_rgba(0,0,0,0.35),0_10px_20px_rgba(0,0,0,0.15)] ring-1 flex flex-col overflow-hidden transition-colors duration-200 ${
          effectiveDarkMode
            ? 'dark border-[#252A2C] bg-[var(--app-surface)] text-[var(--text-primary)] ring-[#343A3D]'
            : 'border-[#1C1F16] bg-[var(--app-surface)] text-[#1A1C16] ring-black/20'
        } ${isLargeText ? 'large-text' : ''}`}
      >
        {/* BARRA SUPERIOR DE ESTADO / DYNAMIC ISLAND */}
        <div
          className={`pt-3 pb-1 px-7 flex items-center justify-between text-xs font-medium select-none z-50 transition-colors duration-200 ${
            effectiveDarkMode ? 'bg-[#202124] text-[#E8EAED]' : 'bg-[#FFFFFF] text-[#1A1C16]'
          }`}
        >
          {/* Hora */}
          <span className="font-semibold text-[13px] tracking-tight">9:41</span>

          {/* Dynamic Island / Cámara frontal y sensor */}
          <div className={`w-24 h-5 rounded-full flex items-center justify-end pr-2.5 shadow-inner ${effectiveDarkMode ? 'bg-[#0B0D0E]' : 'bg-[#1C1F16]'}`}>
            <div className="w-2.5 h-2.5 rounded-full bg-[#0D1117] ring-1 ring-[#30363D]" />
          </div>

          {/* Señal, WiFi y Batería */}
          <div className="flex items-center gap-1.5">
            {/* Señal de red */}
            <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
              <path d="M1 12h2V14H1v-2zm3-3h2v5H4V9zm3-3h2v8H7V6zm3-3h2v11h-2V3z" />
            </svg>
            {/* WiFi */}
            <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
              <path d="M8 12.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-3.5-3a5 5 0 0 1 7 0l-1 1a3.5 3.5 0 0 0-5 0l-1-1zm-3-3a9 9 0 0 1 13 0l-1 1a7.5 7.5 0 0 0-11 0l-1-1z" />
            </svg>
            {/* Batería */}
            <div
              className={`w-5 h-2.5 border rounded-sm p-0.5 flex items-center ${
                effectiveDarkMode ? 'border-current' : 'border-[#1A1C16]'
              }`}
            >
              <div
                className={`w-full h-full rounded-[1px] ${
                  effectiveDarkMode ? 'bg-current' : 'bg-[#1A1C16]'
                }`}
              />
            </div>
          </div>
        </div>

        {/* BARRA DE NAVEGACIÓN DE CHROME MOBILE (DEBAJO DEL STATUS BAR) */}
        <div
          aria-hidden="true"
          className={`px-3 pt-1.5 pb-2 flex items-center gap-2 border-b select-none z-40 transition-colors duration-200 ${
            effectiveDarkMode
              ? 'bg-[#202124] border-[#3C4043] text-[#E8EAED]'
              : 'bg-[#FFFFFF] border-[#E0E2E6] text-[#3C4043]'
          }`}
        >
          {/* Omnibox de Chrome */}
          <div
            className={`flex-1 min-w-0 flex items-center justify-between gap-2 rounded-full px-3 py-1.5 text-[12px] ${
              effectiveDarkMode
                ? 'bg-[#303134] text-[#E8EAED]'
                : 'bg-[#F1F3F4] text-[#202124]'
            }`}
          >
            <div className="flex items-center gap-1.5 min-w-0">
              <Lock className="w-3 h-3 shrink-0 opacity-70" />
              <span className="truncate font-normal tracking-tight">
                {isGoogleAuthPage
                  ? 'accounts.google.com'
                  : `reservavillacielo.com${
                      location.pathname !== '/' ? location.pathname : ''
                    }`}
              </span>
            </div>
            <RotateCw className="w-3.5 h-3.5 shrink-0 opacity-65" />
          </div>

          {/* Contador de pestañas estilo Chrome */}
          <div
            className={`w-5 h-5 shrink-0 rounded-[5px] border-[1.75px] flex items-center justify-center text-[10px] font-bold leading-none ${
              effectiveDarkMode
                ? 'border-[#BDC1C6] text-[#E8EAED]'
                : 'border-[#5F6368] text-[#3C4043]'
            }`}
          >
            1
          </div>

          {/* Menú de 3 puntos de Chrome */}
          <MoreVertical className="w-4 h-4 shrink-0 opacity-75" />
        </div>

        {/* ÁREA DE CONTENIDO DE LA PANTALLA (SCROLLABLE DEBAJO DEL NAVBAR FLOTANTE) */}
        <div
          className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {children}
        </div>

        {/* NAVEGADOR FLOTANTE FIJO */}
        {showBottomNavbar && (
          <BottomNavbar
            isHidden={false}
            activeTab={activeTab}
            onTabChange={(tabId) =>
              navigate(tabId === 'library' ? '/library' : tabId === 'scan' ? '/scan' : '/home')
            }
            onScanQR={() => navigate('/scan')}
            onOpenLibrary={() => navigate('/library')}
          />
        )}

        {/* BARRA INFERIOR DE INICIO (HOME INDICATOR) */}
        <div
          className="w-full bg-[var(--app-surface)] pb-2 pt-1 flex justify-center pointer-events-none select-none z-50 transition-colors duration-200"
        >
          <div
            className={`w-32 h-1 rounded-full ${
              effectiveDarkMode ? 'bg-white/30' : 'bg-[#1A1C16]/25'
            }`}
          />
        </div>
      </div>
    </div>
  );
}
