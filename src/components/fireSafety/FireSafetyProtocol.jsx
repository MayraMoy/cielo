export function FireSafetyProtocol({ isDarkMode, steps }) {
  const heading = isDarkMode ? 'text-[#F4F6ED]' : 'text-[#24251E]';

  return (
    <section aria-labelledby="fire-protocol-title" className="mb-10">
      <h2
        id="fire-protocol-title"
        className={`text-xl font-bold tracking-tight ${heading}`}
      >
        Qué hacer paso a paso
      </h2>

      <ol className="relative mt-6 flex flex-col gap-6 pl-2">
        {steps.map((step, index) => {
          const [lead, ...rest] = step.split(':');
          const hasLead = rest.length > 0;
          const isLast = index === steps.length - 1;

          return (
            <li key={step} className="group relative flex items-start gap-4">
              {!isLast && (
                <span
                  aria-hidden="true"
                  className={`absolute bottom-[-24px] left-4 top-10 w-0.5 ${
                    isDarkMode ? 'bg-[#2E3626]' : 'bg-[#E5E0D3]'
                  }`}
                />
              )}

              <span
                className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold shadow-xs ${
                  isDarkMode
                    ? 'bg-[#E9B949] text-[#24190C]'
                    : 'bg-[#E5B83B] text-white'
                }`}
                aria-hidden="true"
              >
                {index + 1}
              </span>

              <div className="min-w-0 flex-1 pt-1">
                <p
                  className={`text-sm leading-relaxed sm:text-base ${
                    isDarkMode ? 'text-[#E2E8D7]' : 'text-[#2D2A24]'
                  }`}
                >
                  {hasLead ? (
                    <>
                      <span
                        className={`mr-1.5 font-bold ${
                          isDarkMode ? 'text-[#F4F6ED]' : 'text-[#1A1C16]'
                        }`}
                      >
                        {lead}:
                      </span>
                      {rest.join(':')}
                    </>
                  ) : (
                    step
                  )}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
