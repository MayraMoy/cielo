function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
    </svg>
  );
}

export function EmergencyContacts({ contacts, isDarkMode }) {
  const heading = isDarkMode ? 'text-[#F4F6ED]' : 'text-[#24251E]';
  const muted = isDarkMode ? 'text-[#C4CCB9]' : 'text-[#625E54]';

  return (
    <section
      aria-labelledby="fire-contacts-title"
      className={`border-t pt-8 ${
        isDarkMode ? 'border-[#333C2A]' : 'border-[#E6E0D3]'
      }`}
    >
      <h2
        id="fire-contacts-title"
        className={`text-xl font-bold tracking-tight ${heading}`}
      >
        Líneas de emergencia
      </h2>

      <p className={`mt-1 text-sm ${muted}`}>
        Tocá un contacto para iniciar una llamada directa.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-3">
        {contacts.map((contact) => (
          <a
            key={contact.number}
            href={`tel:${contact.number}`}
            className={`group flex min-h-[64px] items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 ${
              isDarkMode
                ? 'border-[#382D26] bg-[#1C1714] hover:border-[#523F34] hover:bg-[#251F1B]'
                : 'border-[#EBE2D8] bg-white shadow-xs hover:border-[#D9C8B8] hover:bg-[#FCF8F5]'
            }`}
          >
            <span className="flex min-w-0 items-center gap-3.5">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                  isDarkMode
                    ? 'bg-[#3D261D] text-[#FFB18A] group-hover:bg-[#4D3025]'
                    : 'bg-[#FAEBE2] text-[#B34E1E] group-hover:bg-[#F5DFC8]'
                }`}
              >
                <PhoneIcon />
              </span>

              <span
                className={`text-sm font-bold tracking-tight sm:text-base ${
                  isDarkMode ? 'text-[#F5E9E2]' : 'text-[#362E2A]'
                }`}
              >
                {contact.label}
              </span>
            </span>

            <span
              className={`shrink-0 rounded-lg px-3 py-1.5 text-base font-extrabold tracking-wide ${
                isDarkMode
                  ? 'bg-[#3D261D]/50 text-[#FFB18A]'
                  : 'bg-[#FAEBE2]/70 text-[#B34E1E]'
              }`}
            >
              {contact.number}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
