export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white dark:bg-[#1F241A] rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.3)] border border-[#E5E7EB] dark:border-[#353D2B] p-7 sm:p-8 w-full max-w-[420px] transition-all font-['Poppins'] ${className}`}>
      {children}
    </div>
  );
}
