import { LockKeyhole, Check, ArrowRight, X } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { GiftBox } from './GiftBox';

export function CharacterProgressCard({
  title, buttonText, unlockedCount = 0, openedRewards = [], onOpenReward,
  onStartGame, isJunior = false, lockedRewardIndex = null, onDismissLockedReward,
}) {
  const { t, content } = useLanguage();
  const totalSteps = content.home.characterCard.totalSteps;
  const count = Math.min(unlockedCount, totalSteps);

  return (
    <section aria-labelledby="home-progress-title" className="rounded-[24px] border border-[#D6DDBB] bg-white p-4 shadow-[0_6px_20px_rgba(38,44,19,0.04)] dark:border-[#4A5635] dark:bg-[#232B1B]">
      <h2 id="home-progress-title" className="text-xl font-bold leading-snug tracking-[-0.025em] text-[#242A19] dark:text-[#F4F6ED]">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-[#555C47] dark:text-[#C5CEB7]">
        {t(count === totalSteps ? 'home.characterCard.completeHint' : isJunior ? 'home.characterCard.juniorHint' : 'home.characterCard.hint')}
      </p>

      <div className="mt-4 flex items-center justify-between gap-2 text-xs font-semibold text-[#515B35] dark:text-[#D4DEBD]">
        <span>{t('home.characterCard.progress')}</span>
        <span>{t('home.characterCard.count', { n: count, total: totalSteps })}</span>
      </div>
      <div role="progressbar" aria-label={t('home.characterCard.unlockedAria')} aria-valuemin={0} aria-valuemax={totalSteps} aria-valuenow={count} className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#E5E8D9] dark:bg-[#414B32]">
        <div className="h-full rounded-full bg-[#687320] dark:bg-[#BCD166] motion-safe:transition-[width] duration-500" style={{ width: `${count / totalSteps * 100}%` }} />
      </div>

      <div className="my-3 grid grid-cols-3 gap-2">
        {Array.from({ length: totalSteps }, (_, index) => {
          const isUnlocked = index < count;
          const isOpened = isUnlocked && openedRewards.includes(index);
          const stateKey = isOpened ? 'claimed' : isUnlocked ? 'available' : 'locked';
          return (
            <button key={index} type="button" onClick={() => onOpenReward(index)}
              aria-label={t(isUnlocked ? isOpened ? 'home.characterCard.rewardOpenedAria' : 'home.characterCard.rewardOpenAria' : 'home.characterCard.rewardLockedAria', { n: index + 1 })}
              aria-describedby={lockedRewardIndex === index ? 'locked-reward-hint' : undefined}
              className={`flex min-w-0 flex-col items-center gap-1 rounded-2xl px-1 py-2 cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#C5D76A] ${isUnlocked ? 'bg-[#F0F4DD] hover:bg-[#E4EBC7] dark:bg-[#354126] dark:hover:bg-[#424F31]' : 'bg-[#F5F4EF] hover:bg-[#ECECE2] dark:bg-[#2B3224] dark:hover:bg-[#363E2C]'}`}>
              <span className="relative">
                <GiftBox isOpen={isOpened} className={`w-12 h-12 ${!isUnlocked ? 'opacity-60 grayscale-[35%]' : !isOpened ? 'motion-safe:animate-[gift-bounce_1.8s_ease-in-out_2]' : ''}`} />
                {!isUnlocked && <span className="absolute -right-1 bottom-0 rounded-full bg-[#E7E8DE] p-1 text-[#555D40] dark:bg-[#48533A] dark:text-[#E5EBD9]"><LockKeyhole size={12} aria-hidden="true" /></span>}
              </span>
              <span className="text-xs font-semibold text-[#424A31] dark:text-[#E6EBD9]">{t('home.characterCard.gift', { n: index + 1 })}</span>
              <span className="flex items-center gap-0.5 text-xs leading-snug text-[#596244] dark:text-[#BECBA9]">{isOpened && <Check size={12} aria-hidden="true" />}{t(`home.characterCard.${stateKey}`)}</span>
            </button>
          );
        })}
      </div>

      <div role="status" aria-live="polite" aria-atomic="true">
        {lockedRewardIndex !== null && (
          <div className="mb-3 rounded-xl border border-[#DAC78A] bg-[#FFF7DF] p-3 text-[#57471E] dark:border-[#7A683A] dark:bg-[#37301F] dark:text-[#F1E2B3]">
            <div className="flex items-start justify-between gap-1">
              <p className="flex items-center gap-1.5 text-sm font-bold"><LockKeyhole size={16} className="shrink-0" aria-hidden="true" />{t('home.characterCard.rewardLockedAria', { n: lockedRewardIndex + 1 })}</p>
              <button type="button" onClick={onDismissLockedReward} aria-label={t('common.close')} className="-mr-2 -mt-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl hover:bg-black/5 cursor-pointer focus-visible:outline-2"><X size={18} aria-hidden="true" /></button>
            </div>
            <p id="locked-reward-hint" className="text-sm leading-relaxed">{t(isJunior ? 'home.characterCard.juniorLockedHint' : 'home.characterCard.lockedHint', { n: lockedRewardIndex + 1 })}</p>
          </div>
        )}
      </div>

      <button type="button" onClick={onStartGame} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#687320] px-4 py-3 text-sm font-bold text-white hover:bg-[#59631B] dark:bg-[#687320] dark:hover:bg-[#59631B] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#C5D76A]">
        {buttonText}<ArrowRight size={18} className="shrink-0" aria-hidden="true" />
      </button>
    </section>
  );
}
