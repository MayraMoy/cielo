import { useNavigate } from 'react-router-dom';
import { useQRScanner } from '../hooks/useQRScanner';
import { useUserProfile } from '../hooks/useUserProfile';
import { useLanguage } from '../hooks/useLanguage';
import { SimpleQRScanner } from '../components/scan/SimpleQRScanner';
import { ScanResultModal } from '../components/scan/ScanResultModal';
import qrCartelImg from '../assets/qr_cartel.png';

export function ScanPage() {
  const navigate = useNavigate();
  const { isJunior } = useUserProfile();
  const { t } = useLanguage();

  const {
    status,
    scannedData,
    stations,
    completedStations,
    resetScan,
  } = useQRScanner();

  const handleStartTrivia = () => {
    const step = scannedData?.step || 1;
    navigate(isJunior ? '/juegos' : '/trivia', {
      state: {
        stationStep: step,
        speciesName: scannedData?.name,
      },
    });
  };

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between overflow-hidden bg-[#11130E] select-none">
      {/* Vista ilustrativa de cámara para el prototipo. */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={qrCartelImg}
          alt={t('scan.cameraPreview')}
          className="h-full w-full object-cover brightness-[0.7] contrast-105"
        />
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80" />

        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      </div>

      {/* Navegación y progreso no interactivo de las estaciones */}
      <header className="relative z-20 px-4 pt-3 flex flex-col gap-2.5">
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => navigate('/home')}
            className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 active:scale-95 transition-all cursor-pointer border border-white/10"
            aria-label={t('scan.backAria')}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

        </div>

        <ol className="grid w-full grid-cols-3 items-start gap-1.5" aria-label={t('scan.stationProgress')}>
          {stations.map((station) => {
            const isDone = completedStations.includes(station.step);

            return (
              <li key={station.id} className={`flex min-w-0 flex-col items-center text-center text-[11px] font-medium leading-tight ${isDone ? 'text-white' : 'text-white/70'}`}>
                <span className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs ${isDone ? 'border-[#A4B95A] bg-[#35420F] text-white' : 'border-white/50 bg-black/70 text-white'}`}>
                  {isDone ? (
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                      <path d="m3 8 3.2 3.2L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : station.step}
                </span>
                <span className="flex h-8 items-center justify-center px-1 line-clamp-2">{station.name}</span>
              </li>
            );
          })}
        </ol>
      </header>

      {/* 3. VISOR SIMPLE DE CÓDIGO QR EN EL CENTRO */}
      <div className="relative z-10 flex-1 flex items-center justify-center -mt-4">
        {status !== 'success' && <SimpleQRScanner isScanning={status === 'scanning'} />}
      </div>

      {/* 5. MODAL DE ESPECIE DESCUBIERTA AL DETECTAR EL QR */}
      {status === 'success' && scannedData && (
        <ScanResultModal
          species={scannedData}
          isJunior={isJunior}
          onStartTrivia={handleStartTrivia}
          onClose={resetScan}
        />
      )}
    </div>
  );
}
