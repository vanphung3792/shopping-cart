type ButtonProps = {
    label: string,
    secondary?: boolean,
    fullWidth?: boolean,
    large?: boolean,
    outline? : boolean,
    disabled? : boolean,
    onClick: () => void
}

const Button = ({ label, secondary, fullWidth, outline, large, disabled, onClick }: ButtonProps) => {
  return (
    <button
        disabled={disabled}
        onClick={onClick}
        className={`
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-lg
            font-semibold
            hover:opacity-80
            transition
            border-2
            ${fullWidth ? "w-full" : "w-fit"}
            ${secondary ? "bg-red-500 text-white border-red-500" : "bg-blue-600 text-white border-blue-600"}
            ${large ? "text-xl px-5 py-5" : "text-md px-4 py-2"}
            ${outline ? "bg-transparent border-white text-white" : ""}
        `}
    >
        {label}
    </button>
  )
}
export default Button