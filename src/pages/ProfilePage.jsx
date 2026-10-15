import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useUserProfile } from '../hooks/useUserProfile';
import { getUnlockedCharacters } from '../data/rewardProgress';
import { clearStoredUser } from '../data/userProfile';
import { LogoutConfirmModal } from '../components/common/LogoutConfirmModal';

const UserAvatarIcon = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" className="w-9 h-9" aria-hidden="true">
    <path d="M 16 5 C 12.145852 5 9 8.1458513 9 12 C 9 14.408843 10.23116 16.55212 12.09375 17.8125 C 8.5266131 19.342333 6 22.881262 6 27 L 8 27 C 8 22.569334 11.569334 19 16 19 C 20.430666 19 24 22.569334 24 27 L 26 27 C 26 22.881262 23.473387 19.342333 19.90625 17.8125 C 21.76884 16.55212 23 14.408843 23 12 C 23 8.1458513 19.854148 5 16 5 z M 16 7 C 18.773268 7 21 9.2267317 21 12 C 21 14.773268 18.773268 17 16 17 C 13.226732 17 11 14.773268 11 12 C 11 9.2267317 13.226732 7 16 7 z" />
  </svg>
);

const BackIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const LogoutIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4" />
    <path d="M10 17l-5-5 5-5" />
    <path d="M5 12h12" />
  </svg>
);

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3 py-3">
      <span className="text-[13px] font-medium text-[#555A49] dark:text-[#B8BFAC]">
        {label}
      </span>
      <span className="text-[13px] font-bold text-[#1A1C16] dark:text-[#F4F6ED] text-right">
        {value}
      </span>
    </div>
  );
}

export function ProfilePage() {
  const navigate = useNavigate();
  const { t, content } = useLanguage();
  const { user } = useUserProfile();
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const unlockedCharacters = useMemo(() => getUnlockedCharacters(), []);
  const unlockedCardsCount = useMemo(() => {
    return content.library.cards.filter(
      (c) => c.unlocked || (c.unlockStep ?? 1) <= unlockedCharacters
    ).length;
  }, [content, unlockedCharacters]);

  const rankLabel =
    unlockedCharacters >= 3
      ? t('library.ranks.master')
      : unlockedCharacters >= 2
      ? t('library.ranks.wetland')
      : unlockedCharacters >= 1
      ? t('library.ranks.starter')
      : t('library.ranks.curious');

  const handleConfirmLogout = () => {
    clearStoredUser();
    navigate('/', { replace: true });
  };

  return (
    <div className="w-full flex-1 flex flex-col select-none bg-[#FAF9F5] dark:bg-[#141710]">
      <header className="px-5 pt-3 flex items-center gap-3">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E5DED2] dark:border-[#46503F] bg-white dark:bg-[#20251B] text-[#37332D] dark:text-[#F4F6ED] active:scale-95 transition-all cursor-pointer"
          aria-label={t('profile.backAria')}
        >
          <BackIcon />
        </button>
        <h1 className="text-lg font-bold text-[#1A1C16] dark:text-[#F4F6ED]">
          {t('profile.title')}
        </h1>
      </header>

      <main className="w-full px-5 pt-4 pb-28 flex flex-col gap-6">
        {/* Tarjeta de identidad */}
        <section className="flex items-center gap-4 px-1">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F2F4E6] dark:bg-[#252E1B] border border-[#CCD69E] dark:border-[#3D482B] text-[#545C1E] dark:text-[#DDEB7A] shadow-2xs">
            <UserAvatarIcon />
          </div>
          <div className="min-w-0">
            <h2 className="text-xl font-black text-[#1A1C16] dark:text-[#F4F6ED] leading-tight truncate">
              {user?.fullName || t('library.guest')}
            </h2>
            <p className="mt-1 text-[15px] font-extrabold text-[#6F7D1F] dark:text-[#DDEB7A]">
              {rankLabel}
            </p>
          </div>
        </section>

        {/* Datos del usuario */}
        <section className="px-1">
          <InfoRow
            label={t('profile.nameLabel')}
            value={user?.fullName || t('profile.undefinedValue')}
          />
          <div className="border-t border-[#E7E4D8] dark:border-[#2A3322]" />
          <InfoRow
            label={t('profile.ageLabel')}
            value={
              user?.age
                ? t('profile.years', { n: user.age })
                : t('profile.undefinedValue')
            }
          />
          <div className="border-t border-[#E7E4D8] dark:border-[#2A3322]" />
          <InfoRow
            label={t('profile.cardsLabel')}
            value={t('library.cardsCount', {
              n: unlockedCardsCount,
              total: content.library.cards.length,
            })}
          />
          <div className="border-t border-[#E7E4D8] dark:border-[#2A3322]" />
          <InfoRow
            label={t('profile.giftsLabel')}
            value={t('profile.giftsValue', { n: unlockedCharacters })}
          />
        </section>

        {/* Sesión */}
        <section className="px-1">
          <h3 className="text-sm font-bold text-[#1A1C16] dark:text-[#F4F6ED]">
            {t('profile.sessionTitle')}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-[#555A49] dark:text-[#B8BFAC]">
            {t('profile.sessionDescription')}
          </p>
          <button
            type="button"
            onClick={() => setIsLogoutOpen(true)}
            className="mt-3.5 flex w-full items-center justify-center gap-2 rounded-xl border border-[#F3D6C6] dark:border-[#5A3A2B] bg-[#FDF3ED] dark:bg-[#38241C] py-3 text-sm font-semibold text-[#A83B12] dark:text-[#F0A57A] hover:bg-[#FBE7DC] dark:hover:bg-[#43291E] active:scale-[0.98] transition-all cursor-pointer"
          >
            <LogoutIcon />
            {t('common.logout')}
          </button>
        </section>
      </main>

      {isLogoutOpen && (
        <LogoutConfirmModal
          onConfirm={handleConfirmLogout}
          onClose={() => setIsLogoutOpen(false)}
        />
      )}
    </div>
  );
}
