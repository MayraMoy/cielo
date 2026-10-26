import { useEffect, useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Portal } from '../common/Portal';

function ServiceIcon({ number }) {
  const iconProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'h-5 w-5',
    'aria-hidden': true,
  };

  if (number === '100') {
    return (
      <svg {...iconProps}>
        <path d="M12 22a8 8 0 0 0 8-8c0-4-3-6-5-9 0 4-2 5-2 5S12 5 9 2c1 6-5 8-5 13a8 8 0 0 0 8 7Z" />
        <path d="M12 22a4 4 0 0 0 4-4c0-2-2-4-3-5 0 2-2 3-2 3s-2 2-2 3a3 3 0 0 0 3 3Z" />
      </svg>
    );
  }

  if (number === '103') {
    return (
      <svg {...iconProps}>
        <path d="m12 3 8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    );
  }

  return (
    <svg
      {...iconProps}
    >
      <path d="M5 18h14l-1-7a6 6 0 0 0-12 0l-1 7Z" />
      <path d="M3 21h18M12 3V1M5 5 3.5 3.5M19 5l1.5-1.5M2 12H1M23 12h-1" />
    </svg>
  );
}

function serviceColor(number) {
  if (number === '100') return 'text-[#B34E1E] dark:text-[#FFB18A]';
  if (number === '103') return 'text-[#36734D] dark:text-[#8AC99A]';
  return 'text-[#2456A6] dark:text-[#8AB4FF]';
}

export function EmergencyContacts({ contacts }) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <Portal>
      <div className="pointer-events-none absolute inset-x-0 bottom-[92px] z-[60] flex justify-end px-3">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="emergency-call-options"
          onClick={() => setIsOpen((open) => !open)}
          className="pointer-events-auto inline-flex min-h-12 min-w-16 items-center justify-center gap-2 rounded-full bg-[#B42318] px-4 text-sm font-extrabold tracking-wide text-white shadow-[0_6px_18px_rgba(91,25,18,0.32)] transition-transform hover:bg-[#971B13] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#B42318]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 17h12l-1.1-6a4.9 4.9 0 0 0-9.8 0L6 17Z" />
            <path d="M4 20h16M12 3V1M5 5 3.5 3.5M19 5l1.5-1.5" />
          </svg>
          {isOpen ? t('fireSafety.closeSos') : 'SOS'}
        </button>

        {isOpen && (
          <section
            id="emergency-call-options"
            aria-label={t('fireSafety.contactsTitle')}
            className="pointer-events-auto absolute bottom-[58px] right-3 w-[min(300px,calc(100%-24px))] rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] p-3 shadow-[var(--card-shadow)]"
          >
            <h2 className="mb-2 px-1 text-sm font-semibold text-[var(--text-primary)]">
              {t('fireSafety.sosMenuTitle')}
            </h2>
            <div className="flex flex-col gap-1.5">
              {contacts.map((contact) => (
                <a
                  key={contact.number}
                  href={`tel:${contact.number}`}
                  aria-label={`${t('fireSafety.callAction')} ${contact.label}: ${contact.number}`}
                  className="group flex min-h-12 items-center gap-3 rounded-xl px-2.5 text-left transition-colors hover:bg-[var(--accent-soft-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-olive)]"
                >
                  <span className={`shrink-0 [&_svg]:h-4 [&_svg]:w-4 ${serviceColor(contact.number)}`}>
                    <ServiceIcon number={contact.number} />
                  </span>
                  <span className="min-w-0 flex-1 text-sm font-medium text-[var(--text-primary)]">
                    {contact.shortLabel ?? contact.label}
                  </span>
                  <span className={`text-sm font-extrabold tabular-nums ${serviceColor(contact.number)}`}>
                    {contact.number}
                  </span>
                  <span className={`text-xs font-bold ${serviceColor(contact.number)}`}>
                    {t('fireSafety.callAction')}
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}

      </div>
    </Portal>
  );
}
