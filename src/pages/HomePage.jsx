import { HOME_DATA } from '../data/homeData';
import { useHome } from '../hooks/useHome';
import { CharacterProgressCard } from '../components/home/CharacterProgressCard';
import { DidYouKnowCard } from '../components/home/DidYouKnowCard';
import { BottomNavbar } from '../components/common/BottomNavbar';
import { CharacterRewardModal } from '../components/home/CharacterRewardModal';

export function HomePage() {
  const {
    userName,
    activeTab,
    unlockedCharacters,
    isRewardModalOpen,
    handleTabChange,
    handleStartGame,
    handleScanQR,
    handleOpenLibrary,
    handleOpenReward,
    handleCloseReward,
  } = useHome();

  return (
    <div className="w-full flex-1 relative flex flex-col justify-between select-none">
      {/* Contenido principal con padding ajustado para pantalla de celular */}
      <main className="w-full px-5 pt-4 pb-28 flex flex-col gap-5">
        {/* Saludo de bienvenida */}
        <header className="mb-0.5">
          <h1 className="text-[28px] font-medium text-[#1A1C16] leading-tight tracking-tight">
            {HOME_DATA.greeting}
          </h1>
          <p className="text-[28px] font-medium text-[#7E8B28] leading-tight tracking-tight mt-0.5">
            {userName}
          </p>
        </header>

        {/* Tarjeta 1: Progreso de personaje y regalos */}
        <CharacterProgressCard
          title={HOME_DATA.characterCard.title}
          buttonText={HOME_DATA.characterCard.buttonText}
          unlockedCount={unlockedCharacters}
          onOpenReward={handleOpenReward}
          onStartGame={handleStartGame}
        />

        {/* Tarjeta 2: Sabías que con el búho lector */}
        <DidYouKnowCard
          title={HOME_DATA.didYouKnowCard.title}
          icon={HOME_DATA.didYouKnowCard.icon}
          description={HOME_DATA.didYouKnowCard.description}
        />
      </main>

      {/* Barra de navegación inferior flotante anclada al celular */}
      <BottomNavbar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onScanQR={handleScanQR}
        onOpenLibrary={handleOpenLibrary}
      />
      {isRewardModalOpen && <CharacterRewardModal onClose={handleCloseReward} />}
    </div>
  );
}
