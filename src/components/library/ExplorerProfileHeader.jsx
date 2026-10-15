import { useAccessibility } from '../../hooks/useAccessibility';
import { useLanguage } from '../../hooks/useLanguage';

// SVG de usuario para la ficha de perfil (con soporte para modo oscuro)
const UserProfileIcon = ({
  className = 'w-7 h-7 text-[#545C1E] dark:text-[#DDEB7A]',
}) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M 16 5 C 12.145852 5 9 8.1458513 9 12 C 9 14.408843 10.23116 16.55212 12.09375 17.8125 C 8.5266131 19.342333 6 22.881262 6 27 L 8 27 C 8 22.569334 11.569334 19 16 19 C 20.430666 19 24 22.569334 24 27 L 26 27 C 26 22.881262 23.473387 19.342333 19.90625 17.8125 C 21.76884 16.55212 23 14.408843 23 12 C 23 8.1458513 19.854148 5 16 5 z M 16 7 C 18.773268 7 21 9.2267317 21 12 C 21 14.773268 18.773268 17 16 17 C 13.226732 17 11 14.773268 11 12 C 11 9.2267317 13.226732 7 16 7 z" />
  </svg>
);

const ChevronIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4 shrink-0 text-[#8A9173] dark:text-[#7C8570] transition-transform group-hover:translate-x-0.5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 6l6 6-6 6" />
  </svg>
);

export function ExplorerProfileHeader({
  user,
  unlockedCharacters,
  onGoRegister,
  onOpenProfile,
}) {
  const { isLargeText, toggleLargeText } = useAccessibility();
  const { t } = useLanguage();

  const rankBadge =
    unlockedCharacters >= 3
      ? t('library.ranks.master')
      : unlockedCharacters >= 2
      ? t('library.ranks.wetland')
      : unlockedCharacters >= 1
      ? t('library.ranks.starter')
      : t('library.ranks.curious');

  return (
    <section className="flex items-center justify-between gap-3 rounded-3xl border border-[#E5E7EB] dark:border-[#2C3520] bg-white dark:bg-[#1A1F14] p-4 shadow-xs transition-colors">
      <div className="flex items-center gap-3.5 min-w-0">
        <button
          type="button"
          onClick={onOpenProfile}
          className="group flex items-center gap-3.5 min-w-0 text-left rounded-2xl transition-opacity active:opacity-70 cursor-pointer"
          aria-label={t('profile.title')}
        >
          {/* Contenedor del avatar con el icono de usuario */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F2F4E6] dark:bg-[#252E1B] border border-[#CCD69E] dark:border-[#3D482B] shadow-2xs">
            <UserProfileIcon />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-base font-bold text-[#1A1C16] dark:text-[#F4F6ED] truncate">
                {user?.fullName || t('library.guest')}
              </h1>
            </div>

            <p className="text-xs font-semibold text-[#687320] dark:text-[#A4B544] mt-0.5">
              {rankBadge}
            </p>
          </div>

          <ChevronIcon />
        </button>

        {!user?.fullName && (
          <button
            type="button"
            onClick={onGoRegister}
            className="shrink-0 text-xs font-semibold text-[#7E8B28] dark:text-[#A4B544] underline underline-offset-2 cursor-pointer hover:text-[#545C1E] dark:hover:text-[#DDEB7A] transition-colors"
          >
            {t('library.register')}
          </button>
        )}
      </div>

      {/* Botón Accesibilidad A+ */}
      <button
        type="button"
        onClick={toggleLargeText}
        className={`shrink-0 inline-flex items-center justify-center rounded-xl border px-2.5 py-1.5 text-xs font-bold shadow-xs active:scale-95 transition-all cursor-pointer ${
          isLargeText
            ? 'border-[#7E8B28] bg-[#7E8B28] text-white'
            : 'border-[#CCD69E] dark:border-[#3D482B] bg-[#F2F4E6] dark:bg-[#252E1B] text-[#4E5618] dark:text-[#DDEB7A] hover:bg-[#E4E8C8] dark:hover:bg-[#2F3A22]'
        }`}
        aria-label={
          isLargeText
            ? t('a11y.disable')
            : t('a11y.enable')
        }
        title={
          isLargeText
            ? t('a11y.active')
            : t('a11y.inactive')
        }
      >
        <span className="text-[12px] font-extrabold tracking-tight">A+</span>
      </button>
    </section>
  );
}
