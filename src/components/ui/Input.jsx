export function Input({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  helperText = '',
  helperHighlight = false,
  icon = null,
  placeholder = '',
  containerClassName = '',
  className = '',
  ...props
}) {
  const describedById = error
    ? `${name}-error`
    : helperText
    ? `${name}-helper`
    : undefined;

  return (
    <div className={`flex flex-col text-left font-['Poppins'] ${containerClassName}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-[13px] font-semibold text-[#232818] dark:text-[#E6EADF] mb-1.5"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && (
          <span
            className="pointer-events-none absolute left-3.5 flex items-center text-[#687320]/80 dark:text-[#B9C76B]"
            aria-hidden="true"
          >
            {icon}
          </span>
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={describedById}
          className={`w-full ${
            icon ? 'pl-10 pr-3.5' : 'px-3.5'
          } py-3 text-[15px] bg-white dark:bg-[#141710] border border-[#7E8773] dark:border-[#7C8A65] rounded-2xl text-[#1A1C16] dark:text-[#F4F6ED] placeholder:text-[#5F6656] dark:placeholder:text-[#A5AC97] transition-all focus:outline-none focus:ring-2 focus:ring-[#687320]/30 dark:focus:ring-[#A4B544]/35 focus:border-[#687320] dark:focus:border-[#A4B544] ${
            error ? 'border-red-600 focus:ring-red-200 focus:border-red-600' : ''
          } ${className}`}
          {...props}
        />
      </div>
      {error ? (
        <span
          id={`${name}-error`}
          role="alert"
          className="text-[12.5px] text-red-700 dark:text-red-400 mt-1.5 font-medium"
        >
          {error}
        </span>
      ) : helperText ? (
        <span
          id={`${name}-helper`}
          aria-live="polite"
          className={`text-[13px] mt-1.5 leading-snug ${
            helperHighlight
              ? 'font-semibold text-[#4E5618] dark:text-[#C5D76A]'
              : 'text-[#4E5445] dark:text-[#B8BFAC]'
          }`}
        >
          {helperText}
        </span>
      ) : null}
    </div>
  );
}
