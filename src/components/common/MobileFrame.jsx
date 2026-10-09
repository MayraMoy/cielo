export function MobileFrame({ children }) {
  return (
    <div className="min-h-screen w-full bg-[#E8E6DE] flex items-center justify-center p-2 sm:p-5 select-none font-['Poppins']">
      {/* Marco exterior del Celular */}
      <div className="relative w-full max-w-[390px] h-[844px] max-h-[96vh] bg-[#FAF9F5] rounded-[50px] border-[10px] sm:border-[12px] border-[#1C1F16] shadow-[0_25px_60px_-10px_rgba(0,0,0,0.35),0_10px_20px_rgba(0,0,0,0.15)] ring-1 ring-black/20 flex flex-col overflow-hidden">
        
        {/* BARRA SUPERIOR DE ESTADO / DYNAMIC ISLAND */}
        <div className="pt-3 pb-1 px-7 flex items-center justify-between text-xs font-medium text-[#1A1C16] select-none z-50 bg-[#FAF9F5]">
          {/* Hora */}
          <span className="font-semibold text-[13px] tracking-tight">9:41</span>

          {/* Dynamic Island / Cámara frontal y sensor */}
          <div className="w-24 h-5 bg-[#1C1F16] rounded-full flex items-center justify-end pr-2.5 shadow-inner">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0D1117] ring-1 ring-[#30363D]" />
          </div>

          {/* Señal, WiFi y Batería */}
          <div className="flex items-center gap-1.5 text-[#1A1C16]">
            {/* Señal de red */}
            <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
              <path d="M1 12h2V14H1v-2zm3-3h2v5H4V9zm3-3h2v8H7V6zm3-3h2v11h-2V3z" />
            </svg>
            {/* WiFi */}
            <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
              <path d="M8 12.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-3.5-3a5 5 0 0 1 7 0l-1 1a3.5 3.5 0 0 0-5 0l-1-1zm-3-3a9 9 0 0 1 13 0l-1 1a7.5 7.5 0 0 0-11 0l-1-1z" />
            </svg>
            {/* Batería */}
            <div className="w-5 h-2.5 border border-[#1A1C16] rounded-sm p-0.5 flex items-center">
              <div className="w-full h-full bg-[#1A1C16] rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* ÁREA DE CONTENIDO DE LA PANTALLA */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {children}
        </div>

        {/* BARRA INFERIOR DE INICIO (HOME INDICATOR) */}
        <div className="w-full pb-2 pt-1 flex justify-center pointer-events-none select-none z-50 bg-[#FAF9F5]">
          <div className="w-32 h-1 bg-[#1A1C16]/25 rounded-full" />
        </div>
      </div>
    </div>
  );
}
