import { House, ScanQrCode, BookOpen } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export function BottomNavbar({ activeTab = 'home', onTabChange, onScanQR, onOpenLibrary }) {
  const { t } = useLanguage();
  const items = [
    { id: 'home', icon: House, label: t('nav.home'), action: () => onTabChange?.('home') },
    { id: 'scan', icon: ScanQrCode, label: t('nav.scan'), action: onScanQR },
    { id: 'library', icon: BookOpen, label: t('nav.library'), action: onOpenLibrary },
  ];

  return (
    <div className="absolute bottom-4 inset-x-0 px-3 z-40 pointer-events-none">
      <nav aria-label={t('nav.ariaNav')} className="pointer-events-auto grid grid-cols-3 gap-1 rounded-[22px] border border-[#DDE2CE] bg-[#F8F8F1] p-1.5 shadow-[0_4px_16px_rgba(44,53,20,0.1)] dark:border-[#465235] dark:bg-[#20271A]">
        {items.map(({ id, icon: Icon, label, action }) => (
          <button key={id} type="button" onClick={action} aria-label={label} aria-current={activeTab === id ? 'page' : undefined}
            className={`flex min-h-[52px] min-w-0 flex-col items-center justify-center gap-0.5 rounded-2xl px-1 py-1 cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-[#687320] dark:focus-visible:outline-[#DDEB7A] ${activeTab === id ? 'bg-[#E6ECCF] text-[#465419] dark:bg-[#3A4728] dark:text-[#E2EDB6]' : 'text-[#5A624A] hover:bg-[#EFF1E6] dark:text-[#CDD5C0] dark:hover:bg-[#2F3925]'}`}>
            <Icon size={22} strokeWidth={activeTab === id ? 2.5 : 1.8} aria-hidden="true" />
            <span className="text-xs font-semibold leading-snug text-center">{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
