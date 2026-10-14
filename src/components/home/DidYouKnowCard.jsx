import { OwlMascot } from './OwlMascot';

export function DidYouKnowCard({ title, icon, description }) {
  return (
    <div className="bg-[#F7F4EE] dark:bg-[#20251B] rounded-[28px] p-4 pb-5 shadow-[0_8px_18px_rgba(28,33,15,0.05)] dark:shadow-[0_8px_18px_rgba(0,0,0,0.2)] border border-[#E7E4D8] dark:border-[#3D4633] relative overflow-hidden transition-all font-['Poppins']">
      <h2 className="text-[18px] sm:text-[19px] font-semibold text-[#1A1C16] dark:text-[#F4F6ED] mb-2.5 flex items-center gap-1.5 leading-tight tracking-[-0.03em]">
        <span>{title}</span>
        <span className="text-lg select-none">{icon}</span>
      </h2>

      <div className="relative min-h-[112px] pr-[88px]">
        <p className="max-w-[19rem] text-[15px] leading-[1.55] text-[#2C2F27] dark:text-[#E6EADF] font-medium tracking-[-0.01em]">
          {description}
        </p>
        <div className="absolute bottom-[-20px] right-[-4px] w-[82px] pointer-events-none drop-shadow-[0_8px_18px_rgba(53,64,15,0.12)]">
          <OwlMascot className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}
