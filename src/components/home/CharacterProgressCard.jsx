import { Play, Star } from 'lucide-react';
import juegosCover from '../../assets/juegos.jpg';
import { useLanguage } from '../../hooks/useLanguage';

const RATING_STORAGE_KEY = 'cielo_game_rating';
const DEFAULT_RATING = 4;

function getDisplayRating() {
  try {
    const raw = localStorage.getItem(RATING_STORAGE_KEY);
    const parsed = Number(raw);
    return Number.isInteger(parsed) && parsed >= 1 && parsed <= 5
      ? parsed
      : DEFAULT_RATING;
  } catch {
    return DEFAULT_RATING;
  }
}

export function CharacterProgressCard({
  title,
  buttonText,
  isJunior = false,
  onStartGame,
}) {
  const { t } = useLanguage();
  const displayRating = getDisplayRating();

  const ageBadgeText = isJunior
    ? t('home.characterCard.ageJuniorBadge')
    : t('home.characterCard.ageAdultBadge');

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] shadow-[var(--card-shadow)] transition-colors duration-200 font-['Poppins']">
      <img
        src={juegosCover}
        alt={title}
        className="block h-[192px] w-full object-cover object-center select-none"
        draggable={false}
      />

      <div className="p-3.5 pt-3">
        <h2 className="text-[16px] font-bold leading-tight tracking-[-0.015em] text-[var(--text-primary)]">
          {t('home.characterCard.gameCardTitle')}
        </h2>

        {/* Fila única de metadatos alineada a la izquierda (patrón F-scan) */}
        <div className="mt-1 mb-3 flex items-center gap-2 text-[12.5px] font-medium text-[var(--text-secondary)]">
          <span>{ageBadgeText}</span>
          <span aria-hidden="true" className="opacity-50">·</span>
          <span
            className="inline-flex items-center gap-0.5"
            role="img"
            aria-label={t('home.characterCard.rateStarAria', { n: displayRating })}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-3.5 w-3.5 shrink-0 ${
                  star <= displayRating
                    ? 'fill-amber-400 text-amber-500'
                    : 'fill-transparent text-[#9AA295] dark:text-[#7D878D]'
                }`}
                aria-hidden="true"
              />
            ))}
          </span>
        </div>

        <button
          type="button"
          onClick={onStartGame}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--brand-olive)] px-5 py-3 text-[14.5px] font-semibold text-white shadow-[0_6px_14px_rgba(69,78,24,0.2)] transition-all duration-200 hover:bg-[var(--brand-olive-hover)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#C5D76A] cursor-pointer"
        >
          <Play className="h-4 w-4 shrink-0 fill-current" aria-hidden="true" />
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  );
}
