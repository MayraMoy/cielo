import { useLanguage } from '../../hooks/useLanguage';

export function FireSafetyProtocol({ isDarkMode, steps }) {
  const { t } = useLanguage();
  const heading = 'text-[var(--text-primary)]';

  return (
    <section aria-labelledby="fire-protocol-title" className="mb-9">
      <h2
        id="fire-protocol-title"
        className={`text-[21px] font-bold tracking-tight ${heading}`}
      >
        {t('fireSafety.protocolTitle')}
      </h2>

      <ol className="relative mt-5 flex flex-col gap-5 pl-1">
        {steps.map((step, index) => {
          const [lead, ...rest] = step.split(':');
          const hasLead = rest.length > 0;
          const isLast = index === steps.length - 1;

          return (
            <li key={step} className="group relative flex items-start gap-4">
              {!isLast && (
                <span
                  aria-hidden="true"
                  className={`absolute bottom-[-20px] left-[15px] top-9 w-0.5 ${
                    isDarkMode ? 'bg-[#3A4246]' : 'bg-[#DDE1E6]'
                  }`}
                />
              )}

              <span
                className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-olive)] text-sm font-bold text-white shadow-sm"
                aria-hidden="true"
              >
                {index + 1}
              </span>

              <div className="min-w-0 flex-1 pt-0.5">
                {hasLead ? (
                  <div>
                    <h3 className={`text-base font-bold leading-snug ${heading}`}>
                      {lead}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                      {rest.join(':').trim()}
                    </p>
                  </div>
                ) : (
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                    {step}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
