export function Button({
  children,
  type = 'button',
  variant = 'primary',
  onClick,
  className = '',
  ...props
}) {
  const baseStyles = "w-full py-3 px-4 rounded-xl font-semibold text-[14.5px] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer";

  const variants = {
    primary: "bg-[#7E8B28] hover:bg-[#6D7821] dark:bg-[#879532] dark:hover:bg-[#96A541] text-white shadow-sm active:scale-[0.99]",
    secondary: "bg-transparent text-[#1F2414] dark:text-[#E6EADF] hover:text-[#7E8B28] dark:hover:text-[#DDEB7A] font-medium text-[14.5px]",
    google: "bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-[#1F2414] dark:text-[#E6EADF] font-medium text-[14px] py-2.5 border border-[#D1D5DB] dark:border-[#55623B] rounded-xl",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
