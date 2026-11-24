import { useLanguage } from '../../hooks/useLanguage';

export function FireSafetyGuidelines({
  isDarkMode,
  preventionRules,
  isStandalone = false,
}) {
  const { t } = useLanguage();
  const heading = 'text-[var(--text-primary)]';

  return (
    <section
      aria-labelledby="fire-prevention-title"
      className={
        isStandalone
          ? 'mb-6'
          : `mb-8 border-t pt-6 ${
              isDarkMode ? 'border-[#3A4246]' : 'border-[#DDE1E6]'
            }`
      }
    >
      <h2
        id="fire-prevention-title"
        className={`text-[21px] font-bold tracking-tight ${heading}`}
      >
        {t('fireSafety.preventionTitle')}
      </h2>
      <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-[var(--text-secondary)] sm:text-base">
        {preventionRules.map((rule, index) => (
          <li key={rule} className="flex items-start gap-3">
            <svg viewBox="0 0 24 24" className={`mt-0.5 h-5 w-5 shrink-0 ${index < 2 ? 'text-[#B91C1C]' : 'text-[var(--brand-olive)]'}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {index < 2 ? <><circle cx="12" cy="12" r="9" /><path d="m5.6 5.6 12.8 12.8" /></> : <><path d="m5 12 4 4L19 6" /><circle cx="12" cy="12" r="9" /></>}
            </svg>
            <span>{rule}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
