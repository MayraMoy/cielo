import bomberosImage from '../../assets/bomberos.jpg';
import emergencyImage from '../../assets/emergencias.webp';
import { useLanguage } from '../../hooks/useLanguage';

function ArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d="M19 12H5m7 7-7-7 7-7" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <path d="M12 22a8 8 0 0 0 8-8c0-4-3-6-5-9 0 4-2 5-2 5S12 5 9 2c1 6-5 8-5 13a8 8 0 0 0 8 7Z" />
      <path d="M12 22a4 4 0 0 0 4-4c0-2-2-4-3-5 0 2-2 3-2 3s-2 2-2 3a3 3 0 0 0 3 3Z" />
    </svg>
  );
}

export function FireSafetyHeader({ isJunior, fireSafety, onBack }) {
  const { t } = useLanguage();

  return (
    <header>
      <section className="relative flex min-h-[156px] w-full flex-col justify-between overflow-hidden px-5 pb-8 pt-3.5">
        <img
          src={isJunior ? emergencyImage : bomberosImage}
          alt={t(isJunior ? 'fireSafety.juniorHeaderImageAlt' : 'fireSafety.headerImageAlt')}
          className="absolute inset-0 h-full w-full scale-[1.03] object-cover object-center"
        />
        <div
          aria-hidden="true"
          className={`absolute inset-0 ${isJunior ? 'bg-gradient-to-b from-[#172209]/30 via-[#172209]/45 to-[#0E1505]/80' : 'bg-gradient-to-b from-[#111907]/75 via-[#172209]/70 to-[#0E1505]/92'}`}
        />

        <button
          type="button"
          onClick={onBack}
          className="relative z-10 inline-flex min-h-10 w-fit items-center gap-2 rounded-xl border border-white/30 bg-black/55 px-3 text-sm font-semibold text-white transition-colors hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
        >
          <ArrowLeft />
          {t('common.back')}
        </button>

        <div className="relative z-10 mt-4 text-white">
          <h1 className="text-[28px] font-extrabold leading-[1.06] tracking-[-0.03em] sm:text-4xl">
            {isJunior ? fireSafety.juniorModalTitle : fireSafety.modalTitle}
          </h1>
        </div>
      </section>
    </header>
  );
}

export function FireSafetyJuniorCallCard() {
  const { t } = useLanguage();

  return (
    <section className="mt-4">
      <p className="mb-2 text-center text-[13.5px] font-semibold text-[var(--text-primary)]">
        {t('fireSafety.callIfAlone')}
      </p>
      <a
        href="tel:100"
        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#B91C1C] px-4 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#991B1B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C] focus-visible:ring-offset-2"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
        </svg>
        {t('fireSafety.callFirefighters')}
      </a>
    </section>
  );
}

export function FireSafetyAlertCard({ fireSafety }) {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="fire-alert-title" className="text-[var(--text-primary)]">
      <h2 id="fire-alert-title" className="flex items-center gap-2 text-[17px] font-bold leading-snug tracking-tight">
        <span className="shrink-0 text-[#B91C1C]"><FlameIcon /></span>
        <span>{t('fireSafety.anteIncendio')}</span>
      </h2>
      <p className="mt-1 text-[14px] leading-snug text-[var(--text-secondary)]">
        {fireSafety.adultIntro}
      </p>

      <a
        href="tel:100"
        className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#B91C1C] px-4 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#991B1B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C] focus-visible:ring-offset-2"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
        </svg>
        {t('fireSafety.callFirefighters')}
      </a>

      <div className="mt-2.5 grid grid-cols-2 gap-2">
        {fireSafety.emergencyContacts.filter(({ number }) => number !== '100').map((contact) => (
          <a
            key={contact.number}
            href={`tel:${contact.number}`}
            className="flex min-h-[54px] items-center justify-between gap-2 rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] px-3 py-2 text-[var(--text-primary)] shadow-[var(--card-shadow)] transition-colors duration-200 hover:bg-[var(--accent-soft-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C]"
          >
            <span className="flex min-w-0 flex-col">
              <span className="text-xs font-medium text-[var(--text-secondary)]">{contact.shortLabel ?? contact.label}</span>
              <span className="text-lg font-extrabold tabular-nums leading-tight">{contact.number}</span>
            </span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--fire-phone-icon-bg)] text-[#B91C1C] dark:text-[#FCA5A5]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
