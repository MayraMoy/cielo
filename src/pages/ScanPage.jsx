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
    cameraMode,
    videoRef,
    stations,
    selectedStationIndex,
    completedStations,
    selectStation,
    triggerScan,
    resetScan,
    toggleCameraMode,
  } = useQRScanner();

  const handleStartTrivia = () => {
    const step = scannedData?.step || selectedStationIndex + 1;
    navigate(isJunior ? '/juegos' : '/trivia', {
      state: {
        stationStep: step,
        speciesName: scannedData?.name,
      },
    });
  };

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between overflow-hidden bg-[#11130E] select-none">
      {/* 1. FONDO DE CÁMARA (SIMULACIÓN AMBIENTAL O CÁMARA REAL) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {cameraMode === 'live' ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="relative w-full h-full">
            <img
              src={qrCartelImg}
              alt="Cámara de la reserva"
              className="w-full h-full object-cover brightness-[0.7] contrast-105"
            />
            <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80" />
          </div>
        )}

        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      </div>

      {/* 2. BARRA SUPERIOR: BOTÓN VOLVER, CONTROLES Y SELECTOR DE POSTA QR */}
      <header className="relative z-20 px-4 pt-3 flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
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

          {/* Indicador de estado */}
          <div className="px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                status === 'scanning'
                  ? 'bg-amber-400 animate-ping'
                  : status === 'success'
                  ? 'bg-[#84CC16]'
                  : 'bg-white/80'
              }`}
            />
            <span className="text-white text-xs font-medium tracking-tight">
              {status === 'scanning'
                ? t('scan.statusScanning')
                : status === 'success'
                ? t('scan.statusDetected')
                : t('scan.stationOf', {
                    current: selectedStationIndex + 1,
                    total: stations.length,
                  })}
            </span>
          </div>

          {/* Alternar Cámara Real / Simulación */}
          <button
            type="button"
            onClick={toggleCameraMode}
            className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-medium border border-white/15 hover:bg-black/60 transition-all cursor-pointer"
            title={t('scan.cameraToggleTitle')}
          >
            {cameraMode === 'simulation'
              ? t('scan.cameraModeLive')
              : t('scan.cameraModeSimulation')}
          </button>
        </div>

        {/* Selector de las 3 Estaciones QR del recorrido para demostración */}
        <div
          className="flex items-center justify-center gap-1.5"
          role="group"
          aria-label={t('scan.selectStationAria')}
        >
          {stations.map((st, idx) => {
            const isSelected = idx === selectedStationIndex;
            const isDone = completedStations.includes(st.step);

            return (
              <button
                key={st.id}
                type="button"
                onClick={() => selectStation(idx)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border backdrop-blur-md flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#7E8B28] text-white border-[#B5C370] shadow-sm'
                    : 'bg-black/45 text-white/80 border-white/15 hover:bg-black/65'
                }`}
              >
                <span>
                  {t('scan.stationButton', { step: st.step, name: st.name })}
                </span>
                {isDone && (
                  <span className="text-[#DFFF67] font-bold" title={t('scan.completed')}>
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </header>

      {/* 3. VISOR SIMPLE DE CÓDIGO QR EN EL CENTRO */}
      <div className="relative z-10 flex-1 flex items-center justify-center -mt-4">
        <SimpleQRScanner
          isScanning={status === 'scanning'}
          isSuccess={status === 'success'}
        />
      </div>

      {/* 4. BOTÓN DISPARADOR DE CÁMARA */}
      <div className="relative z-30 mb-26 flex flex-col items-center justify-center pointer-events-auto">
        <button
          type="button"
          disabled={status === 'scanning' || status === 'success'}
          onClick={triggerScan}
          className="w-16 h-16 rounded-full border-3 border-white bg-white/20 hover:bg-white/35 active:scale-90 backdrop-blur-md flex items-center justify-center text-white shadow-[0_8px_25px_rgba(0,0,0,0.5)] transition-all duration-150 cursor-pointer group disabled:opacity-60"
          aria-label={t('scan.triggerScanAria')}
          title={t('scan.triggerScanTitle')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="34px"
            viewBox="0 -960 960 960"
            width="34px"
            fill="#ffffff"
            className="transition-transform group-hover:scale-110"
          >
            <path d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-520q0-33 23.5-56.5T160-800h160l80-80h160l80 80h160q33 0 56.5 23.5T880-720v520q0 33-23.5 56.5T800-120H160Zm0-80h640v-520H654l-80-80H386l-80 80H160v520Zm320-260Z" />
          </svg>
        </button>
        <span className="text-white/90 text-xs font-semibold mt-2 drop-shadow-sm select-none text-center px-4">
          {isJunior ? t('scan.scanHintJunior') : t('scan.scanHintAdult')}
        </span>
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
