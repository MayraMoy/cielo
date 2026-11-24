import { Footprints, Megaphone, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

const JUNIOR_ICONS = [Footprints, Megaphone, ShieldCheck];

export function FireSafetyProtocol({ steps, isJunior = false }) {
  const { t } = useLanguage();
  const heading = 'text-[var(--text-primary)]';

  return (
    <section aria-labelledby="fire-protocol-title" className={isJunior ? 'mb-2' : 'mb-7'}>
      <h2 id="fire-protocol-title" className={`text-[18px] font-bold tracking-tight ${heading}`}>
        {isJunior ? t('fireSafety.juniorCardTitle') : t('fireSafety.protocolTitle')}
      </h2>
      <ol className="mt-3 flex flex-col gap-2.5">
        {steps.map((step, index) => {
          const [lead, ...rest] = step.split(':');
          const hasLead = rest.length > 0;
          const JuniorIcon = JUNIOR_ICONS[index] || ShieldCheck;

          return (
            <li
              key={step}
              className="group relative flex items-start gap-3 rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] p-3.5 shadow-[var(--card-shadow)] transition-colors duration-200"
            >
              {isJunior ? (
                <span
                  className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#B91C1C] text-white shadow-sm"
                  aria-hidden="true"
                >
                  <JuniorIcon className="h-[18px] w-[18px]" />
                </span>
              ) : (
                <span
                  className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#B91C1C] text-sm font-bold text-white shadow-sm"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
              )}
              <div className="min-w-0 flex-1 pt-0.5">
                {hasLead ? (
                  <div>
                    <h3 className={`text-[15.5px] font-bold leading-snug ${heading}`}>
                      {isJunior ? `${index + 1}. ${lead}` : lead}
                    </h3>
                    <p className="mt-0.5 text-[13.5px] leading-snug text-[var(--text-secondary)] sm:text-sm">
                      {rest.join(':').trim()}
                    </p>
                  </div>
                ) : (
                  <p className="text-[14px] leading-snug text-[var(--text-secondary)] sm:text-base">{step}</p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
