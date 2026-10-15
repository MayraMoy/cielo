import { useLanguage } from '../../hooks/useLanguage';

export function FireSafetyGuidelines({ isDarkMode, preventionRules }) {
  const { t } = useLanguage();
  const heading = isDarkMode ? 'text-[#F4F6ED]' : 'text-[#24251E]';

  return (
    <section
      aria-labelledby="fire-prevention-title"
      className={`mb-8 border-t pt-8 ${
        isDarkMode ? 'border-[#333C2A]' : 'border-[#E6E0D3]'
      }`}
    >
      <h2
        id="fire-prevention-title"
        className={`text-xl font-bold tracking-tight ${heading}`}
      >
        {t('fireSafety.preventionTitle')}
      </h2>
      <ul
        className={`mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed sm:text-base ${
          isDarkMode ? 'text-[#E2E8D7]' : 'text-[#2D2A24]'
        }`}
      >
        {preventionRules.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>
    </section>
  );
}
