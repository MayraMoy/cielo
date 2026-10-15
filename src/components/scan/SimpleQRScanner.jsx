import { useLanguage } from '../../hooks/useLanguage';

export function SimpleQRScanner({ isScanning, isSuccess }) {
  const { t } = useLanguage();
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none select-none">
      
      {/* 1. MÁSCARA SEMITRANSPARENTE ALREDEDOR DEL VISOR */}
      <div className="relative w-[230px] h-[230px] sm:w-[250px] sm:h-[250px] flex items-center justify-center">
        
        {/* Recuadro con esquinas de enfoque */}
        <div
          className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
            isSuccess
              ? "border-2 border-[#84CC16] shadow-[0_0_20px_rgba(132,204,22,0.6)]"
              : isScanning
              ? "border-2 border-[#84CC16]/60 shadow-[0_0_15px_rgba(132,204,22,0.4)]"
              : "border border-white/20"
          }`}
        >
          {/* Esquina superior izquierda */}
          <span
            className={`absolute -top-1 -left-1 w-7 h-7 border-t-4 border-l-4 rounded-tl-xl transition-colors duration-300 ${
              isScanning || isSuccess ? "border-[#84CC16]" : "border-white"
            }`}
          />
          {/* Esquina superior derecha */}
          <span
            className={`absolute -top-1 -right-1 w-7 h-7 border-t-4 border-r-4 rounded-tr-xl transition-colors duration-300 ${
              isScanning || isSuccess ? "border-[#84CC16]" : "border-white"
            }`}
          />
          {/* Esquina inferior izquierda */}
          <span
            className={`absolute -bottom-1 -left-1 w-7 h-7 border-b-4 border-l-4 rounded-bl-xl transition-colors duration-300 ${
              isScanning || isSuccess ? "border-[#84CC16]" : "border-white"
            }`}
          />
          {/* Esquina inferior derecha */}
          <span
            className={`absolute -bottom-1 -right-1 w-7 h-7 border-b-4 border-r-4 rounded-br-xl transition-colors duration-300 ${
              isScanning || isSuccess ? "border-[#84CC16]" : "border-white"
            }`}
          />
        </div>

        {/* Silueta tenue de QR en el centro del lector */}
        <div className="opacity-35 text-white/50 transform scale-90">
          <svg viewBox="0 0 100 100" width="120" height="120" fill="currentColor">
            {/* Esquinas QR */}
            <rect x="10" y="10" width="26" height="26" rx="3" stroke="currentColor" strokeWidth="4" fill="none" />
            <rect x="18" y="18" width="10" height="10" rx="1" fill="currentColor" />
            <rect x="64" y="10" width="26" height="26" rx="3" stroke="currentColor" strokeWidth="4" fill="none" />
            <rect x="72" y="18" width="10" height="10" rx="1" fill="currentColor" />
            <rect x="10" y="64" width="26" height="26" rx="3" stroke="currentColor" strokeWidth="4" fill="none" />
            <rect x="18" y="72" width="10" height="10" rx="1" fill="currentColor" />
            {/* Puntos centrales simulados */}
            <circle cx="44" cy="22" r="3" />
            <circle cx="56" cy="34" r="3" />
            <circle cx="50" cy="50" r="4" />
            <circle cx="34" cy="50" r="3" />
            <circle cx="66" cy="50" r="3" />
            <circle cx="44" cy="78" r="3" />
            <circle cx="66" cy="70" r="3" />
            <circle cx="78" cy="82" r="3" />
          </svg>
        </div>

        {/* LÁSER DE ESCANEO ACTIVO AL PRESIONAR LA CÁMARA */}
        {isScanning && (
          <div
            className="absolute inset-x-2 h-1 bg-gradient-to-r from-transparent via-[#84CC16] to-transparent shadow-[0_0_12px_#84CC16] pointer-events-none"
            style={{
              animation: "scanLine 0.8s ease-in-out infinite alternate",
            }}
          />
        )}

        {/* FLASH DE DETECCIÓN EXITOSA */}
        {isSuccess && (
          <div className="absolute inset-0 bg-[#84CC16]/25 rounded-2xl animate-ping pointer-events-none" />
        )}
      </div>

      {/* 2. TEXTO DE INSTRUCCIONES */}
      <div className="mt-6 px-6 text-center">
        <p className="text-white/90 text-[13px] font-medium drop-shadow-md">
          {isScanning
            ? t('scan.scannerScanning')
            : isSuccess
            ? t('scan.scannerSuccess')
            : t('scan.scannerIdle')}
        </p>
      </div>
    </div>
  );
}
