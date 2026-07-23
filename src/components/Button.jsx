const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${backgroundColor ?? "bg-coral-red"}
        ${textColor ?? "text-white"}
        ${borderColor ?? "border-coral-red"}
        ${fullWidth ? "w-full" : "w-fit"}
        rounded-full`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="icon" className="ml-2 rounded-full bg-white w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
