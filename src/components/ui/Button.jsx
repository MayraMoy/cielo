export function Button({
  children,
  type = 'button',
  variant = 'primary',
  onClick,
  className = '',
  ...props
}) {
  const baseStyles = "w-full py-3 px-4 rounded-md font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer";

  const variants = {
    primary: "bg-[#7E8B28] hover:bg-[#6D7821] text-white shadow-sm active:scale-[0.99]",
    secondary: "bg-transparent text-[#1F2414] hover:text-[#7E8B28] font-normal text-[14px]",
    google: "bg-transparent hover:bg-black/5 text-[#1F2414] font-normal text-[14px] py-2",
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
