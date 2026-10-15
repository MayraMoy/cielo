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
      className={`min-h-full w-full flex-1 shrink-0 px-5 pb-6 pt-4 sm:px-7 ${
        isDarkMode
          ? 'bg-[#141710] text-[#F4F6ED]'
          : 'bg-[#FAF9F5] text-[#1A1C16]'
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
        <EmergencyContacts
          contacts={fireSafety.emergencyContacts}
          isDarkMode={isDarkMode}
        />
        <p
          className={`mt-10 border-t pt-6 text-center text-xs font-medium uppercase tracking-wide ${
            isDarkMode
              ? 'border-[#333C2A] text-[#8C9680]'
              : 'border-[#E6E0D3] text-[#7A766B]'
          }`}
        >
          {fireSafety.footer}
        </p>
      </div>

      <div aria-hidden="true" className="h-24 shrink-0" />
    </main>
  );
}
