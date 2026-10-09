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
    <div className={`flex flex-col text-left ${containerClassName}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-[14px] font-normal text-[#1F2414] mb-2"
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
        className={`w-full px-3 py-2.5 text-[15px] bg-white border border-[#99A838] rounded-md text-[#1A1C16] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7E8B28]/40 focus:border-[#7E8B28] ${
          error ? 'border-red-500 focus:ring-red-200' : ''
        } ${className}`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 mt-1">{error}</span>
      )}
    </div>
  );
}
