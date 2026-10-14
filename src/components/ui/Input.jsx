export function Input({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  placeholder = '',
  containerClassName = '',
  className = '',
  ...props
}) {
  return (
    <div className={`flex flex-col text-left font-['Poppins'] ${containerClassName}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-[14px] font-medium text-[#1F2414] dark:text-[#E6EADF] mb-2"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3.5 py-2.5 text-[15px] bg-white dark:bg-[#141710] border border-[#B5C370] dark:border-[#55623B] rounded-xl text-[#1A1C16] dark:text-[#F4F6ED] placeholder:text-[#727763] dark:placeholder:text-[#9EA48F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7E8B28]/40 dark:focus:ring-[#A4B544]/40 focus:border-[#7E8B28] dark:focus:border-[#A4B544] ${
          error ? 'border-red-500 focus:ring-red-200' : ''
        } ${className}`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 mt-1.5 font-medium">{error}</span>
      )}
    </div>
  );
}
