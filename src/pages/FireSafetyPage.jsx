import { useNavigate } from 'react-router-dom';
import { EmergencyContacts } from '../components/fireSafety/EmergencyContacts';
import { FireSafetyGuidelines } from '../components/fireSafety/FireSafetyGuidelines';
import { FireSafetyHeader } from '../components/fireSafety/FireSafetyHeader';
import { FireSafetyProtocol } from '../components/fireSafety/FireSafetyProtocol';
import { useTheme } from '../hooks/useTheme';
import { useUserProfile } from '../hooks/useUserProfile';
import { useLanguage } from '../hooks/useLanguage';

export function FireSafetyPage() {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const { isJunior } = useUserProfile();
  const { content } = useLanguage();
  const fireSafety = content.fireSafety;
  const steps = isJunior ? fireSafety.juniorSteps : fireSafety.adultSteps;

  return (
    <main
      className={`min-h-full w-full flex-1 shrink-0 px-5 pb-6 pt-4 sm:px-7 animate-[page-enter-right_260ms_cubic-bezier(0.22,1,0.36,1)_both] ${
        isDarkMode
          ? 'bg-[var(--app-surface)] text-[var(--text-primary)]'
          : 'bg-[var(--app-surface)] text-[#1A1C16]'
      }`}
    >
      <div className="mx-auto w-full max-w-2xl">
        <FireSafetyHeader
          isDarkMode={isDarkMode}
          isJunior={isJunior}
          fireSafety={fireSafety}
          onBack={() => navigate('/home')}
        />
        <FireSafetyProtocol isDarkMode={isDarkMode} steps={steps} />
        <FireSafetyGuidelines
          isDarkMode={isDarkMode}
          preventionRules={fireSafety.preventionRules}
        />
        <p
          className={`mt-8 border-t pt-5 text-center text-sm leading-relaxed ${
            isDarkMode
              ? 'border-[#3A4246] text-[var(--text-secondary)]'
              : 'border-[#DDE1E6] text-[var(--text-secondary)]'
          }`}
        >
          {fireSafety.footer}
        </p>
      </div>

      <EmergencyContacts contacts={fireSafety.emergencyContacts} />
      <div aria-hidden="true" className="h-24 shrink-0" />
    </main>
  );
}
