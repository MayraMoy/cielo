export function BottomNavbar({
  activeTab = 'home',
  onTabChange,
  onScanQR,
  onOpenLibrary,
}) {
  return (
    <div className="absolute bottom-3 left-0 right-0 px-4 z-40 pointer-events-none">
      <nav
        className="pointer-events-auto bg-white rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.12)] border border-black/5 px-6 py-2.5 flex items-center justify-between relative"
        aria-label="Navegación principal"
      >
        {/* BOTÓN INICIO (HOME) */}
        <button
          type="button"
          onClick={() => onTabChange?.('home')}
          className="flex flex-col items-center justify-center p-2 group cursor-pointer transition-colors relative"
          aria-label="Inicio"
          aria-current={activeTab === 'home' ? 'page' : undefined}
        >
          {/* Indicador activo superior verde */}
          {activeTab === 'home' && (
            <span className="w-8 h-1 bg-[#7E8B28] rounded-full mb-1 transition-all" />
          )}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#1f1f1f"
            className="transition-transform group-hover:scale-105"
          >
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
          </svg>
        </button>

        {/* BOTÓN CENTRAL QR ELEVADO */}
        <div className="relative -top-5 flex justify-center">
          <button
            type="button"
            onClick={onScanQR}
            className="w-14 h-14 bg-[#7E8B28] hover:bg-[#6D7821] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-[#7E8B28]/40 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ring-4 ring-[#FAF9F5]"
            aria-label="Escanear código QR"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#ffffff"
              className="select-none"
            >
              <path d="M80-680v-200h200v80H160v120H80Zm0 600v-200h80v120h120v80H80Zm600 0v-80h120v-120h80v200H680Zm120-600v-120H680v-80h200v200h-80ZM700-260h60v60h-60v-60Zm0-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm120-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm240-320v240H520v-240h240ZM440-440v240H200v-240h240Zm0-320v240H200v-240h240Zm-60 500v-120H260v120h120Zm0-320v-120H260v120h120Zm320 0v-120H580v120h120Z" />
            </svg>
          </button>
        </div>

        {/* BOTÓN COLECCIÓN / BIBLIOTECA (RIGHT) */}
        <button
          type="button"
          onClick={onOpenLibrary}
          className="flex flex-col items-center justify-center p-2 group cursor-pointer transition-colors relative"
          aria-label="Colección y Guía"
          aria-current={activeTab === 'library' ? 'page' : undefined}
        >
          {activeTab === 'library' && (
            <span className="w-8 h-1 bg-[#7E8B28] rounded-full mb-1 transition-all" />
          )}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#1f1f1f"
            className="transition-transform group-hover:scale-105"
          >
            <path d="M320-320h480v-480h-80v280l-100-60-100 60v-280H320v480Zm0 80q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm360-720h200-200Zm-200 0h480-480Z" />
          </svg>
        </button>
      </nav>
    </div>
  );
}
