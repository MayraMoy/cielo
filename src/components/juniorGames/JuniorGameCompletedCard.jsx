import { useLanguage } from '../../hooks/useLanguage';
import { GiftBox } from '../home/GiftBox';

export function JuniorGameCompletedCard({
  title,
  onGoHome,
  onSeeCollection,
  onChooseAnother,
  onReplay,
}) {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-[350px] bg-white dark:bg-[#1F241A] rounded-3xl p-6 shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-[#E5E7EB] dark:border-[#353D2B] flex flex-col items-center text-center gap-4 animate-[modal-appear_220ms_ease-out] font-['Poppins']">
      <div className="transform hover:scale-110 transition-transform my-1">
        <GiftBox className="w-20 h-20 animate-[gift-bounce_1.2s_ease-in-out_infinite]" />
      </div>

      <div>
        <h2 className="text-[22px] sm:text-[24px] font-bold text-[#1A1C16] dark:text-[#F4F6ED] tracking-tight">
          {title || t('juniorGames.memorama.winTitle')}
        </h2>
      </div>

      <p className="text-[14px] leading-relaxed text-[#2B2F25] dark:text-[#E6EADF] bg-[#FAF9F5] dark:bg-[#141710] p-4 rounded-2xl border border-[#E5E7EB] dark:border-[#353D2B]">
        {t('juniorGames.completed.message')}
      </p>

      <div className="w-full flex flex-col gap-2.5 pt-1">
        <button
          type="button"
          onClick={onGoHome}
          className="w-full py-3 px-4 bg-[#7E8B28] hover:bg-[#6D7821] text-white text-[14.5px] font-semibold rounded-xl shadow-sm transition-all active:scale-[0.98] cursor-pointer"
        >
          {t('juniorGames.completed.goHome')}
        </button>
        <button
          type="button"
          onClick={onSeeCollection}
          className="w-full py-2.5 px-4 bg-[#F2F4E6] dark:bg-[#2A3222] text-[#4E5618] dark:text-[#DDEB7A] text-[13.5px] font-semibold rounded-xl transition-all active:scale-[0.98] cursor-pointer"
        >
          {t('juniorGames.completed.seeCollection')}
        </button>
        <button
          type="button"
          onClick={onReplay}
          className="w-full py-2.5 px-4 bg-transparent hover:bg-black/5 text-[#555A49] text-xs font-medium rounded-xl transition-all cursor-pointer"
        >
          {t('juniorGames.comparison.retry')}
        </button>
        <button
          type="button"
          onClick={onChooseAnother}
          className="w-full py-2.5 px-4 bg-transparent hover:bg-black/5 text-[#555A49] text-xs font-medium rounded-xl transition-all cursor-pointer"
        >
          {t('juniorGames.chooseAnother')}
        </button>
      </div>
    </div>
  );
}
