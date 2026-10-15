import { useLanguage } from '../../hooks/useLanguage';

export function LanguageSelector({ className = '' }) {
  const { lang, setLang, languages, t } = useLanguage();

  return (
    <div
      className={`flex items-center justify-center gap-1.5 ${className}`}
      role="group"
      aria-label={t('register.languageLabel')}
    >
      {languages.map((language) => {
        const isActive = lang === language.code;
        return (
          <button
            key={language.code}
            type="button"
            onClick={() => setLang(language.code)}
            aria-pressed={isActive}
            aria-label={language.label}
            title={language.label}
            className={`inline-flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-xs font-bold transition-all active:scale-95 cursor-pointer ${
              isActive
                ? 'border-[#687320] bg-[#687320] text-white dark:border-[#879532] dark:bg-[#879532]'
                : 'border-[#CCD69E] bg-[#F2F4E6] text-[#4E5618] hover:bg-[#E4E8C8] dark:border-[#55623B] dark:bg-[#242B1E] dark:text-[#E3E9D5] dark:hover:bg-[#303A27]'
            }`}
          >
            <span aria-hidden="true">{language.flag}</span>
            <span>{language.short}</span>
          </button>
        );
      })}
    </div>
  );
}
