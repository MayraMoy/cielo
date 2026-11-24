import { useEffect, useId, useRef, useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export function LanguageSelector({ className = '', variant = 'light' }) {
  const { lang, setLang, languages, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const menuId = useId();
  const isOverlay = variant === 'overlay';

  const currentLanguage =
    languages.find((language) => language.code === lang) || languages[0];

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelectLanguage = (code) => {
    setLang(code);
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className={`inline-flex items-center rounded-xl border p-0.5 transition-colors ${
        isOverlay
          ? 'border-white/30 bg-black/55 text-white'
          : 'border-[var(--surface-card-border)] bg-[var(--surface-card)] shadow-[var(--control-shadow)]'
      } ${className}`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={`${t('register.languageLabel')}: ${currentLanguage.label}`}
        title={`${t('register.languageLabel')}: ${currentLanguage.label}`}
        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors active:scale-95 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
          isOverlay
            ? 'text-white hover:bg-white/15'
            : 'text-[#545C1E] hover:bg-[#F2F4E6] dark:text-[#B9C76B] dark:hover:bg-[#303A27]'
        }`}
      >
        <Globe className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
      </button>

      <div
        id={menuId}
        role="group"
        aria-label={t('register.languageLabel')}
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-columns,opacity] duration-200 ease-out motion-reduce:transition-none ${
          isOpen ? 'grid-cols-[1fr] opacity-100' : 'grid-cols-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex items-center gap-0.5 pl-0.5">
            {languages.map((language) => {
              const isActive = lang === language.code;
              return (
                <button
                  key={language.code}
                  type="button"
                  tabIndex={isOpen ? 0 : -1}
                  onClick={() => handleSelectLanguage(language.code)}
                  aria-pressed={isActive}
                  aria-label={language.label}
                  title={language.label}
                  className={`inline-flex h-10 min-w-[38px] items-center justify-center rounded-lg px-2.5 text-[12px] font-bold tracking-wide transition-colors active:scale-95 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    isActive
                      ? isOverlay
                        ? 'bg-white text-[#232A0F]'
                        : 'bg-[#687320] text-white dark:bg-[#879532]'
                      : isOverlay
                      ? 'text-white/90 hover:bg-white/15 hover:text-white'
                      : 'text-[#383B31] hover:bg-[#F2F4E6] hover:text-[#4E5618] dark:text-[#C4CACE] dark:hover:bg-[#303A27]'
                  }`}
                >
                  {language.short}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
