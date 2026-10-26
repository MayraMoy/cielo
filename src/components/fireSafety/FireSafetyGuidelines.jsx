import { useLanguage } from '../../hooks/useLanguage';

export function FireSafetyGuidelines({ isDarkMode, preventionRules }) {
  const { t } = useLanguage();
  const heading = 'text-[var(--text-primary)]';

  return (
    <section
      aria-labelledby="fire-prevention-title"
      className={`mb-8 border-t pt-7 ${
        isDarkMode ? 'border-[#3A4246]' : 'border-[#DDE1E6]'
      }`}
    >
      <h2
        id="fire-prevention-title"
        className={`text-[21px] font-bold tracking-tight ${heading}`}
      >
        {t('fireSafety.preventionTitle')}
      </h2>
      <ul
        className="mt-3 list-disc space-y-2.5 pl-5 text-[15px] leading-relaxed text-[var(--text-secondary)] marker:text-[var(--brand-olive)] sm:text-base"
      >
        {preventionRules.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>
    </section>
  );
}
