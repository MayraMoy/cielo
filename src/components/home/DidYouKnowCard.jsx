import { useEffect, useId, useState } from 'react';
import { Leaf } from 'lucide-react';
import { OwlMascot } from './OwlMascot';

export function DidYouKnowCard({ title, facts = [], isJunior = false }) {
  const [factIndex, setFactIndex] = useState(0);
  const [isPointerOver, setIsPointerOver] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const headingId = useId();
  const factCount = facts.length;
  const isPaused = isPointerOver || hasFocus;
  const currentFact = facts[factIndex] ?? facts[0];
  const description = isJunior
    ? currentFact?.juniorDescription ?? currentFact?.description
    : currentFact?.description;

  useEffect(() => {
    if (factCount < 2 || isPaused) return undefined;

    const timeoutId = window.setTimeout(() => {
      setFactIndex((index) => (index + 1) % factCount);
    }, 18000);

    return () => window.clearTimeout(timeoutId);
  }, [factCount, factIndex, isPaused]);

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] p-4 pb-5 shadow-[var(--card-shadow)] transition-colors duration-200 font-['Poppins'] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#C5D76A]"
      role="group"
      tabIndex={0}
      aria-labelledby={headingId}
      onPointerEnter={() => setIsPointerOver(true)}
      onPointerLeave={() => setIsPointerOver(false)}
      onFocus={() => setHasFocus(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setHasFocus(false);
        }
      }}
    >
      <h2 id={headingId} className="mb-2 flex items-center gap-1.5 text-[16px] font-medium leading-tight tracking-[-0.01em] text-[var(--text-primary)]">
        <span>{title}</span>
        <Leaf className="h-4 w-4 shrink-0 text-[#687320] dark:text-[var(--text-name)]" aria-hidden="true" />
      </h2>

      <div className="relative min-h-[112px] pr-[72px]">
        <p
          key={factIndex}
          className="max-w-[19rem] text-[14px] font-normal leading-[1.55] tracking-normal text-[var(--text-secondary)]"
        >
          {description}
        </p>
        <div className="absolute bottom-[-18px] right-[-3px] w-[64px] pointer-events-none drop-shadow-[0_5px_12px_rgba(53,64,15,0.1)]">
          <OwlMascot className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}
