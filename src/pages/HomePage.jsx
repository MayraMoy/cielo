import { HOME_DATA } from '../data/homeData';
import { useHome } from '../hooks/useHome';
import { useUserProfile } from '../hooks/useUserProfile';
import { CharacterProgressCard } from '../components/home/CharacterProgressCard';
import { DidYouKnowCard } from '../components/home/DidYouKnowCard';
import { BottomNavbar } from '../components/common/BottomNavbar';
import { CharacterRewardModal } from '../components/home/CharacterRewardModal';
import { EmergencyFireModal } from '../components/home/EmergencyFireModal';

export function HomePage() {
  const {
    userName,
    activeTab,
    unlockedCharacters,
    isRewardModalOpen,
    selectedRewardIndex,
    isFireModalOpen,
    handleTabChange,
    handleStartGame,
    handleScanQR,
    handleOpenLibrary,
    handleOpenReward,
    handleCloseReward,
    handleOpenFireModal,
    handleCloseFireModal,
  } = useHome();

  const { user, isJunior } = useUserProfile();

  return (
    <div className="w-full flex-1 relative flex flex-col justify-between select-none">
      {/* Contenido principal con padding ajustado para pantalla de celular */}
      <main className="w-full px-5 pt-3 pb-28 flex flex-col gap-4">
        {/* Barra superior: Tag de Modo y Botón SOS Incendios personalizados */}
        <div className="flex items-center justify-between gap-2">
          {/* Tag de Modo Informativo */}
          <div className="inline-flex items-center gap-1.5 rounded-xl border border-[#CCD69E] bg-[#F2F4E6] px-3 py-1.5 text-[11px] font-semibold text-[#4E5618] shadow-[0_1px_2px_rgba(0,0,0,0.04)] select-none">
            {isJunior ? (
              <svg
                className="w-3.5 h-3.5 text-[#687320]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
            ) : (
              <svg
                className="w-3.5 h-3.5 text-[#545C1E]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            )}
            <span>{isJunior ? 'Guía Junior' : 'Guía Adulto'}</span>
            {user?.age ? (
              <span className="text-[10px] font-normal text-[#687320]">
                • {user.age} años
              </span>
            ) : null}
          </div>

          {/* Botón SOS Incendios integrado a la paleta */}
          <button
            type="button"
            onClick={handleOpenFireModal}
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#EAC3AF] bg-[#FDF3ED] px-3.5 py-1.5 text-[11px] font-semibold text-[#8C3A16] shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:bg-[#F9E6DB] active:scale-95 transition-all cursor-pointer"
            aria-label="Prevención de incendios y protocolo de emergencias"
          >
            <svg
              className="w-3.5 h-3.5 text-[#C2410C]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 23c-4.97 0-9-4.03-9-9 0-3.64 2.22-6.66 4-9 .61-.8 1.94-.37 2 .67.15 2.65 1.76 4.33 3 5.33 1-1.33 1.5-3.33 1-5 1.5 1 4 3.5 4 8 0 4.97-4.03 9-9 9z" />
            </svg>
            <span>{HOME_DATA.fireSafety.buttonLabel}</span>
          </button>
        </div>

        {/* Saludo de bienvenida */}
        <header className="mb-0.5">
          <h1 className="text-[26px] font-medium text-[#1A1C16] leading-tight tracking-tight">
            {isJunior ? HOME_DATA.juniorGreeting : HOME_DATA.greeting}
          </h1>
          <p className="text-[28px] font-semibold text-[#7E8B28] leading-tight tracking-tight mt-0.5">
            {userName}
          </p>
        </header>

        {/* Tarjeta 1: Progreso de personaje y regalos */}
        <CharacterProgressCard
          title={
            isJunior
              ? HOME_DATA.characterCard.juniorTitle
              : HOME_DATA.characterCard.title
          }
          buttonText={
            isJunior
              ? HOME_DATA.characterCard.juniorButtonText
              : HOME_DATA.characterCard.buttonText
          }
          unlockedCount={unlockedCharacters}
          onOpenReward={handleOpenReward}
          onStartGame={handleStartGame}
        />

        {/* Tarjeta 2: Sabías que con el búho lector */}
        <DidYouKnowCard
          title={HOME_DATA.didYouKnowCard.title}
          icon={HOME_DATA.didYouKnowCard.icon}
          description={
            isJunior
              ? HOME_DATA.didYouKnowCard.juniorDescription
              : HOME_DATA.didYouKnowCard.description
          }
          isJunior={isJunior}
        />
      </main>

      {/* Barra de navegación inferior flotante anclada al celular */}
      <BottomNavbar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onScanQR={handleScanQR}
        onOpenLibrary={handleOpenLibrary}
      />
      {isRewardModalOpen && (
        <CharacterRewardModal
          rewardIndex={selectedRewardIndex}
          onClose={handleCloseReward}
          onOpenLibrary={() => {
            handleCloseReward();
            handleOpenLibrary();
          }}
        />
      )}
      {isFireModalOpen && (
        <EmergencyFireModal
          isJunior={isJunior}
          onClose={handleCloseFireModal}
        />
      )}
    </div>
  );
}
