import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { FireSafetyGuidelines } from '../components/fireSafety/FireSafetyGuidelines';
import {
  FireSafetyAlertCard,
  FireSafetyHeader,
  FireSafetyJuniorCallCard,
} from '../components/fireSafety/FireSafetyHeader';
import { FireSafetyProtocol } from '../components/fireSafety/FireSafetyProtocol';
import { useTheme } from '../hooks/useTheme';
import { useUserProfile } from '../hooks/useUserProfile';
import { useLanguage } from '../hooks/useLanguage';

export function FireSafetyPage() {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const exitTimer = useRef(null);
  const { isDarkMode } = useTheme();
  const { isJunior } = useUserProfile();
  const { content } = useLanguage();
  const fireSafety = content.fireSafety;
  const steps = isJunior ? fireSafety.juniorSteps : fireSafety.adultSteps;

  useEffect(() => () => window.clearTimeout(exitTimer.current), []);

  const handleBackHome = () => {
    if (isExiting) return;
    setIsExiting(true);
    exitTimer.current = window.setTimeout(() => {
      navigate('/home', { state: { fromFireSafety: true } });
    }, 180);
  };

  return (
    <main
      className={`min-h-full w-full flex-1 shrink-0 ${isExiting ? 'pointer-events-none animate-[page-exit-right_180ms_cubic-bezier(0.4,0,1,1)_forwards]' : 'animate-[page-enter-right_260ms_cubic-bezier(0.22,1,0.36,1)_both]'} ${
        isDarkMode
          ? 'bg-[var(--app-surface)] text-[var(--text-primary)]'
          : 'bg-[var(--app-surface)] text-[#1A1C16]'
      }`}
    >
      <div className="mx-auto w-full max-w-2xl">
        <FireSafetyHeader
          isJunior={isJunior}
          fireSafety={fireSafety}
          onBack={handleBackHome}
        />
        <div className="relative z-20 -mt-5 rounded-t-[26px] bg-[var(--app-surface)] px-5 pb-10 pt-5 sm:px-7">
          {isJunior ? (
            /* Niños: primero los 3 pasos simples con íconos, luego el botón 100 si no hay adulto */
            <>
              <FireSafetyProtocol steps={steps} isJunior />
              <FireSafetyJuniorCallCard />
              <div className="pt-6">
                <FireSafetyGuidelines
                  isDarkMode={isDarkMode}
                  preventionRules={fireSafety.preventionRules}
                />
              </div>
            </>
          ) : (
            /* Adultos: flujo vertical único sin pestañas (contactos -> pasos PAS -> prevención) */
            <>
              <FireSafetyAlertCard fireSafety={fireSafety} />
              <div className="pt-5">
                <FireSafetyProtocol steps={steps} />
                <FireSafetyGuidelines
                  isDarkMode={isDarkMode}
                  preventionRules={fireSafety.preventionRules}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
