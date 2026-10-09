import { SCAN_DATA } from '../../data/scanData';

export function WoodenSign({ onQRClick, isScanning, isLocking }) {
  const { woodenSign } = SCAN_DATA;

  return (
    <div className="relative mx-auto w-full max-w-[325px] select-none">
      {/* Poste de madera vertical */}
      <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-[-140px] w-12 bg-gradient-to-r from-[#6E4B33] via-[#8C6246] to-[#593C29] shadow-lg rounded-sm z-0 border-x border-[#4A3222]/40" />

      {/* Cartel de madera horizontal */}
      <div className="relative z-10 bg-[#CBB18B] bg-gradient-to-br from-[#D9C4A3] via-[#C5A780] to-[#B39369] rounded-xl p-4 sm:p-5 shadow-[0_12px_28px_rgba(0,0,0,0.35)] border-2 border-[#9D7D54] overflow-hidden">
        {/* Tornillo superior */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-b from-[#8C8F94] to-[#4B4E54] shadow-sm border border-[#2B2D31] flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-[#2B2D31]" />
        </div>

        {/* Tornillo inferior */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-b from-[#8C8F94] to-[#4B4E54] shadow-sm border border-[#2B2D31] flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-[#2B2D31]" />
        </div>

        {/* Textura sutil veta de madera */}
        <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900 via-transparent to-amber-950" />

        <div className="grid grid-cols-[1.1fr_0.9fr] gap-3 items-center pt-2 pb-2">
          {/* LADO IZQUIERDO: TEXTO EXPLICATIVO */}
          <div className="flex flex-col text-[#2D2115]">
            {/* Ícono hojas */}
            <div className="mb-1 text-[#22180F]">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A9.45 9.45 0 0 0 11.23 21c3.15-.3 6.06-2.19 7.6-5.18 1.4-2.73 1.15-6.3-1.83-7.82zM12 2C6.5 2 2 6.5 2 12c0 2.2.72 4.23 1.94 5.86C5.56 12.35 8.7 8.21 13.9 6.78 14.53 4.14 13.43 2.5 12 2z" />
              </svg>
            </div>

            <h3 className="font-bold text-[15px] leading-tight text-[#22180F]">
              {woodenSign.title}
            </h3>
            <p className="font-medium text-[11px] leading-snug text-[#3B2C1E] mb-2">
              {woodenSign.subtitle}
            </p>

            <p className="text-[9.5px] leading-tight text-[#473727] mb-2">
              {woodenSign.description}
            </p>

            {/* Ícono de celular con flecha indicando escanear */}
            <div className="flex items-center gap-1.5 text-[#352618] mt-0.5">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
              <span className="text-[9px] font-semibold tracking-tight">
                {woodenSign.callToAction}
              </span>
            </div>
          </div>

          {/* LADO DERECHO: CÓDIGO QR CON ESQUINEROS */}
          <div
            onClick={onQRClick}
            className="relative p-2 flex items-center justify-center cursor-pointer group"
            title="Presiona para simular escaneo"
          >
            {/* Esquinas / Brackets de encuadre en el cartel */}
            <div className="absolute inset-0 pointer-events-none">
              <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#2B1F13]" />
              <span className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-[#2B1F13]" />
              <span className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-[#2B1F13]" />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#2B1F13]" />
            </div>

            {/* Código QR Vectorial Nítido */}
            <div className="bg-[#FAF3E8]/80 p-1.5 rounded-sm shadow-inner relative overflow-hidden">
              <svg
                viewBox="0 0 100 100"
                width="84"
                height="84"
                fill="#22180F"
                className="select-none"
              >
                {/* Patrón QR: Esquina superior izquierda */}
                <rect x="5" y="5" width="28" height="28" fill="#22180F" rx="2" />
                <rect x="11" y="11" width="16" height="16" fill="#FAF3E8" />
                <rect x="15" y="15" width="8" height="8" fill="#22180F" />

                {/* Patrón QR: Esquina superior derecha */}
                <rect x="67" y="5" width="28" height="28" fill="#22180F" rx="2" />
                <rect x="73" y="11" width="16" height="16" fill="#FAF3E8" />
                <rect x="77" y="15" width="8" height="8" fill="#22180F" />

                {/* Patrón QR: Esquina inferior izquierda */}
                <rect x="5" y="67" width="28" height="28" fill="#22180F" rx="2" />
                <rect x="11" y="73" width="16" height="16" fill="#FAF3E8" />
                <rect x="15" y="77" width="8" height="8" fill="#22180F" />

                {/* Puntos y módulos de datos interiores */}
                <rect x="38" y="8" width="6" height="6" />
                <rect x="48" y="14" width="6" height="6" />
                <rect x="38" y="24" width="6" height="6" />
                <rect x="54" y="24" width="6" height="6" />
                <rect x="10" y="40" width="6" height="6" />
                <rect x="22" y="46" width="6" height="6" />
                <rect x="38" y="40" width="8" height="8" />
                <rect x="50" y="42" width="6" height="6" />
                <rect x="62" y="40" width="6" height="6" />
                <rect x="74" y="46" width="6" height="6" />
                <rect x="86" y="40" width="6" height="6" />
                <rect x="42" y="56" width="6" height="6" />
                <rect x="54" y="54" width="8" height="8" />
                <rect x="68" y="58" width="6" height="6" />
                <rect x="84" y="54" width="6" height="6" />
                <rect x="38" y="70" width="6" height="6" />
                <rect x="50" y="74" width="6" height="6" />
                <rect x="64" y="72" width="6" height="6" />
                <rect x="78" y="78" width="8" height="8" />
                <rect x="42" y="86" width="6" height="6" />
                <rect x="56" y="84" width="8" height="8" />
                <rect x="70" y="88" width="6" height="6" />
              </svg>

              {/* LÁSER DE ESCANEO ANIMADO SOBRE EL QR */}
              {isScanning && (
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#84CC16] to-transparent shadow-[0_0_8px_#84CC16] animate-pulse pointer-events-none"
                     style={{
                       animation: 'scanLine 2s ease-in-out infinite alternate',
                     }}
                />
              )}

              {/* RETÍCULA DE ENFOQUE EXITOSO */}
              {isLocking && (
                <div className="absolute inset-0 bg-[#84CC16]/20 border-2 border-[#84CC16] rounded-sm animate-ping pointer-events-none" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
