import { OwlMascot } from './OwlMascot';

export function DidYouKnowCard({ title, icon, description, subject }) {
  return (
    <section className="rounded-[24px] p-4 bg-[#F1F2E8] dark:bg-[#1C2217] border border-[#E0E5D0] dark:border-[#353F2B] relative font-['Poppins']">
      <h2 className="text-[18px] sm:text-[19px] font-semibold text-[#1A1C16] dark:text-[#F4F6ED] mb-2.5 flex items-center gap-1.5 leading-tight tracking-[-0.03em]">
        <span>{title}</span>
        <span className="text-lg select-none">{icon}</span>
      </h2>

      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          {subject && <h3 className="mb-1 text-sm font-semibold text-[#454F28] dark:text-[#D8E3B8]">{subject}</h3>}
          <p className="text-sm leading-relaxed text-[#454B38] dark:text-[#CFD7C2]">{description}</p>
        </div>
        <div className="w-[72px] shrink-0 self-end pointer-events-none">
          <OwlMascot className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
