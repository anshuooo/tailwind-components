const Button = ({ text, onClick, variant = "danger", size = "md" }) => {
    const baseStyles =
      "font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50";
  
    const variantStyles = {
      primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
      secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300",
      success: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-300",
      danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
      outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-200",
    };
  
    const sizeStyles = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-5 py-3 text-lg",
    };
  
    return (
      <button
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  