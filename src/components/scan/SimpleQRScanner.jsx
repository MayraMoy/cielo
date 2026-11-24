import { useLanguage } from '../../hooks/useLanguage';

export function SimpleQRScanner({ isScanning }) {
  const { t } = useLanguage();
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none select-none">
      
      {/* 1. MÁSCARA SEMITRANSPARENTE ALREDEDOR DEL VISOR */}
      <div className="relative w-[230px] h-[230px] sm:w-[250px] sm:h-[250px] flex items-center justify-center">
        <div className="absolute inset-0 rounded-2xl shadow-[0_0_0_9999px_rgba(0,0,0,0.45)] pointer-events-none" />
        {/* Recuadro con esquinas de enfoque */}
        <div
          className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
            isScanning
              ? "border-2 border-[#84CC16]/60 shadow-[0_0_15px_rgba(132,204,22,0.4)]"
              : "border border-white/20"
          }`}
        >
          <svg
            viewBox="0 0 250 250"
            preserveAspectRatio="none"
            className={`absolute inset-0 h-full w-full transition-colors duration-300 ${
              isScanning ? "text-[#84CC16]" : "text-white"
            }`}
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M30 2H16A14 14 0 0 0 2 16v14 M220 2h14a14 14 0 0 1 14 14v14 M2 220v14a14 14 0 0 0 14 14h14 M248 220v14a14 14 0 0 1-14 14h-14"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Guía visual mientras el lector analiza la imagen. */}
        {isScanning && (
          <div
            className="absolute inset-x-2 h-1 bg-gradient-to-r from-transparent via-[#84CC16] to-transparent shadow-[0_0_12px_#84CC16] pointer-events-none"
            style={{
              animation: "scanLine 0.8s ease-in-out infinite alternate",
            }}
          />
        )}

      </div>

      {/* 2. TEXTO DE INSTRUCCIONES */}
      <div className="mt-5 rounded-full border border-white/20 bg-black/75 px-4 py-2 text-center">
        <p className="text-white text-[13px] font-medium" aria-live="polite" aria-atomic="true">
          {isScanning ? t('scan.scannerScanning') : t('scan.scannerIdle')}
        </p>
      </div>
    </div>
  );
}
