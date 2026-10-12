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

  const { user, isJunior, toggleMode } = useUserProfile();

  return (
    <div className="w-full flex-1 relative flex flex-col justify-between select-none">
      {/* Contenido principal con padding ajustado para pantalla de celular */}
      <main className="w-full px-5 pt-3 pb-28 flex flex-col gap-4">
        {/* Barra superior de Modo (Niño/Adulto) y Botón SOS Incendios */}
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={toggleMode}
            title="Haz clic para cambiar entre vista Niño (Tomás) y vista Adulto"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#B5C370] bg-[#F2F4E6] px-3 py-1 text-[11px] font-semibold text-[#545C1E] shadow-2xs transition-all hover:bg-[#E4E8C8] active:scale-95 cursor-pointer"
          >
            <span>{isJunior ? '👦 Modo Junior (≤12)' : '🧑 Modo Adulto'}</span>
            {user?.age ? (
              <span className="text-[10px] font-normal opacity-80">
                • {user.age} años
              </span>
            ) : null}
          </button>

          <button
            type="button"
            onClick={handleOpenFireModal}
            className="inline-flex items-center gap-1 rounded-full border border-red-300 bg-red-50 px-3 py-1 text-[11px] font-semibold text-red-700 shadow-2xs transition-all hover:bg-red-100 active:scale-95 cursor-pointer"
            aria-label="Prevención de incendios y emergencias"
          >
            <span>🔥</span>
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
