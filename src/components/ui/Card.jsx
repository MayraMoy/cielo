export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.12)] border border-[#D1D5DB] p-8 sm:p-10 w-full max-w-[420px] transition-all ${className}`}>
      {children}
    </div>
  );
}
